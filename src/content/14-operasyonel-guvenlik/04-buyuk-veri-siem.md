---
title: "Büyük Veri (Big Data) SIEM Mimarisi ve Akış Analitiği"
sidebar:
  order: 4
---

# Büyük Veri (Big Data) SIEM Mimarisi ve Akış Analitiği

Geleneksel SIEM çözümleri (Splunk, QRadar, ArcSight) günde milyarlarca event işleyen büyük kurumlar için ciddi ölçeklenebilirlik ve maliyet sorunlarıyla karşılaşır. Modern "Next-Gen SIEM" yaklaşımı; büyük veri işleme altyapısı (Apache Kafka, Spark), bulut ölçeği ve makine öğrenmesi tabanlı anomali tespitini birleştirerek bu kısıtlamaları aşar.

## §14.4.1. Apache Kafka ve Spark Tabanlı Log İşleme Hatları (Pipelines)

### Geleneksel SIEM Tıkanıklıkları

*   **Lisans Maliyeti:** Splunk gibi platformlar işlenen günlük veri hacmi (GB/gün) üzerinden lisanslanır; log hacmi arttıkça maliyet katlanarak yükselir.
*   **İngest Hızı Sınırı:** Ani event patlaması (örn: fidye yazılımı saldırısı) geleneksel SIEM'in ingest kapasitesini aşarak log kaybına yol açabilir.
*   **Sorgu Gecikmesi:** Terabaytlarca ham log üzerinde karmaşık threat hunting sorguları saatler sürebilir.

### Apache Kafka: Dağıtık Log Akış Altyapısı

Kafka, saniyede milyonlarca event işleyebilen dağıtık publish-subscribe mesaj suyoludur.

*   **Log Toplayıcılar → Kafka:** Filebeat, Fluentd veya Logstash ajanları log'ları Kafka topic'lerine yazar.
*   **Düşük Gecikme:** Kafka, olayları gerçek zamanlıya yakın iletir (<10ms gecikme mümkün).
*   **Dayanıklılık:** Log'lar Kafka'da yapılandırılabilir süre (örn: 7 gün) saklanır; downstream tüketici geride kalsa bile log kaybı olmaz.
*   **Topic Ayrıştırması:** Güvenlik olayları (auth, network, endpoint) farklı topic'lere yönlendirilerek işleme paralelleştirilir.

### Apache Spark: Dağıtık Batch ve Micro-Batch İşleme

Spark, Kafka'dan beslenen log akışını dağıtık işçi (worker) cluster'ında paralel işler.

*   **Spark Structured Streaming:** Gerçek zamanlı log analizinde micro-batch modeli ile düşük gecikme sağlar.
*   **Normalizasyon ve Zenginleştirme:** Ham Syslog/CEF formatındaki loglar parse edilir; IP adresleri tehdit istihbarat (TI) veritabanıyla karşılaştırılır; GeoIP verisi eklenir.
*   **Rule Engine:** Korelasyon kuralları Spark SQL veya DataFrame API ile ölçeklenebilir biçimde uygulanır.

---

## §14.4.2. Denetimsiz Öğrenme ile Anomali Tespiti

### İmza Tabanlı Tespitinin Sınırı

İmza tabanlı kurallar yalnızca bilinen saldırı kalıplarını yakalar. "Bilinmeyen-bilinmeyen" (unknown-unknown) tehditleri — yeni TTP'ler, insider threat, lateral movement — imzasız olduğu için gözden kaçar.

### Makine Öğrenmesi Tabanlı Anomali Tespiti

*   **Baseline Oluşturma:** Her kullanıcı, cihaz ve servis için "normal" davranış modeli çıkarılır (çalışma saatleri, erişilen sistemler, iletişim partnerleri, veri hacmi).
*   **UEBA (User and Entity Behavior Analytics):** Birey veya varlık davranışının kendi tarihsel baseline'ından sapması risk skoru üretir. Düşük skor → normal; yüksek skor → analist incelemesi.

**Yaygın Kullanılan Algoritmalar:**

*   **Isolation Forest:** Anormal örnekleri ağaç bölümleme ile hızlıca izole eder; yüksek boyutlu log verisinde etkilidir.
*   **Autoencoder (Neural Network):** Normal log paternleri öğrenir; öğrenilemeyen (reconstruction error yüksek) kayıtlar anomali olarak işaretlenir.
*   **K-Means / DBSCAN Kümeleme:** Birbiriyle benzer davranış gösteren event grupları kümelenir; hiçbir kümeye uymayan outlier'lar öne çıkar.

### Elasticsearch / OpenSearch ile ML Entegrasyonu

*   Elastic ML (Anomaly Detection Jobs) ve OpenSearch Anomaly Detection eklentisi, SIEM logları üzerinde hazır ML pipeline'ları sunar.
*   "Rare" ve "population" analiz modelleri ile nadiren görülen kullanıcı eylemlerini (gece yarısı admin girişi) otomatik flagler.

---

## §14.4.3. Dağıtık Veritabanlarında Hızlı Tehdit Avcılığı Sorguları

### Threat Hunting İçin Sorgu Performansı

Threat hunting, analistin büyük veri üzerinde hipotez bazlı arama yapmasıdır. Sorgular hızlı yanıt vermezse analist üretkenliği düşer.

### PostgreSQL Partition Yapısı ile Log Depolama

Büyük log tabloları `partition by range (event_time)` ile günlük/aylık bölümlere ayrılır:
*   Sorgu yalnızca ilgili zaman diliminin partition'ını tarar; tam tablo scan'ı önlenir.
*   Eski partition'lar arşivlenerek veya silinerek toplam depolama hacmi yönetilir.

### ClickHouse: Kolonar OLAP Veritabanı

ClickHouse, güvenlik analitiği için giderek yaygınlaşan kolonar (column-store) veritabanıdır:

*   Sıkıştırma oranları çok yüksektir; log verisi PostgreSQL'e kıyasla 5-10x daha az yer kaplar.
*   Agregasyon sorguları (count, sum, group by) milyarlarca satırda saniyeler içinde tamamlanır.
*   Grafana entegrasyonu ile threat hunting dashboard'ları gerçek zamanlı güncellenir.

### Apache Parquet + Datalake Yaklaşımı

*   Ham loglar S3 uyumlu nesne depolamaya (MinIO, AWS S3) Apache Parquet formatında yazılır.
*   Apache Trino veya Apache Spark SQL ile datalake üzerinde ad-hoc tehdit avcılığı sorguları çalıştırılır.
*   Bu yaklaşım uzun vadeli arşiv (12+ ay) için geleneksel SIEM'den çok daha maliyet etkilidir.
