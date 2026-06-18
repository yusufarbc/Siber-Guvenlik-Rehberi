# Ağ Yönetimi ve Güvenliği X: SOC ve NOC Süreçleri

---

### Ağ Yönetimi ve Güvenliği X: SOC ve NOC Süreçleri

![](https://cdn-images-1.medium.com/max/800/1*S7cMHBrZlktBq6LvzR_AYQ.png)

SOC (Security Operations Center — Güvenlik Operasyon Merkezi) ve NOC (Network Operations Center — Ağ Operasyon Merkezi) birbirini tamamlayan ancak farklı odaklara sahip iki merkezi yapıdır. NOC, bir kuruluşun ağ altyapısını, sistem performansını ve hizmet sürekliliğini 7/24 izler ve kesinti süresini minimuma indirmeyi hedefler Temel işlevleri arasında ağ/sunucu izleme, arıza kaydı oluşturma, bakım ve güncelleme yönetimi yer alır. SOC ise bilgi teknolojisi altyapısını dış/ iç tehditlere, kötü amaçlı yazılımlara ve güvenlik ihlallerine karşı koruyan merkezdir. SOC ekipleri, güvenlik olaylarını önceden tespit etmek, analiz etmek ve olası bir saldırıya anında müdahale etmek için 7/24 çalışır.

---

### SOC ve NOC Tanımı ve Temel Farklar

![](https://cdn-images-1.medium.com/max/800/1*wT8UMU4_ZcVdPNLwUlYoYg.png)

SOC vs NOC

Özetle, NOC ağın “canlı” kalmasını sağlarken SOC bu hizmetin güvenli kalmasını garanti eder. NOC performans/kullanılabilirlik odaklıdır; SOC ise güvenlik odaklıdır. İki merkez ayrı yapılsa da modern uygulamalarda entegrasyon ve koordinasyon önem kazanmıştır.

### Organizasyonel Yapı ve Teknik İşleyiş

Hem SOC hem NOC genellikle **7/24 vardiya düzeni** ile çalışır ve çok katmanlı bir uzmanlık yapısında organize edilir. NOC ekipleri ağ ve sistem yönetimi uzmanlarından oluşur; birinci seviye (L1) NOC mühendisleri temel ağ/sistem izleme ve basit müdahaleleri yapar, ikinci seviye (L2) karmaşık problemleri analiz edip çözer, üçüncü seviye (L3) ise altyapı tasarımı, optimizasyon ve stratejik yeniliklerle ilgilenir. Benzer şekilde SOC ekipleri de L1/L2/L3 analist kademelerine ayrılır: L1 analistler gelen güvenlik alarmlarını izler ve basit tehditleri triage eder, L2 analistler derinlemesine tehdit analizi ve olay müdahalesi yapar, L3 analistler ise gelişmiş saldırıları (örneğin APT’ler) avlar ve SOC süreçlerini geliştirir. SOC seviyesine, çoğu organizasyonda bir “SOC Yöneticisi” veya “Müdürü” eklenir; bu kişi ekibi yönetir, raporlama ve uyum süreçlerini denetler. NOC tarafında da NOC Müdürü veya Network Yöneticisi benzeri roller organizasyonu yönetir.

Teknik açıdan, **NOC** ağ cihazları (switch/router), sunucular, veri yolları ve performans metriklerini izler. Ağ izleme platformları (ör. SolarWinds, Nagios, Zabbix vb.) ve SNMP tabanlı araçlarla sürekli veri toplar ve arıza/baseline sapmalarını tespit eder Ayrıca NOC personeli müşteri yardım masası (ticketing/help desk) sistemleriyle entegre çalışarak sorunlara bilet açar veya günceller. **SOC** ise tüm kurum içi/ dışı log kaynaklarını (sunucu, uç nokta, güvenlik duvarı, uygulama logları vs.) SIEM gibi platformlarda toplar ve sürekli analiz eder. SOC altyapısında IDS/IPS sistemleri, EDR ajanları, DLP ve tehdit istihbarat servisleri gibi güvenlik araçları bulunur. NOC ve SOC iç ekiplerinin yanı sıra her iki hizmet de dış kaynak (MSP/MSSP) olarak sağlanabilir; ihtiyaç duyulursa **entegre bir ekip** veya **aynı ekibe** bağlı olarak da yönetilebilir. Her durumda NOC ve SOC ekipleri üretilen log ve alarm verilerini toplamak, analiz etmek ve doğru bir şekilde aksiyon almakla yükümlüdür.

### İş Akışları: İzleme, Analiz, Müdahale Süreçleri

* **Sürekli İzleme:** NOC, ağ trafiği, cihaz durumu ve performans metriklerini (throughput, bağlantı gecikmesi, CPU yükü vb.) 7/24 izler. SOC ise ağ ve sistem loglarını (güvenlik duvarı, sunucu, uç nokta logları) SIEM/IDS/IPS araçlarıyla takip eder. Her iki merkezde de otomasyon ve alarm kurallarıyla olaylar (örn. olağandışı trafik, başarısız oturum denemeleri) tespit edilir.
* **Olay Tespiti ve Kayıt:** İzleme sonucunda oluşan alarmlar NOC’ta genellikle sistem arızası, bağlantı kesintisi veya kapasite aşımları olarak görülür; SOC’ta ise kötü amaçlı yazılım, yetkisiz erişim veya veri sızıntısı gibi güvenlik ihlalleri tetikleyicidir. Tespit edilen her olay için anında bilet açılır ve ilgili seviyeye yönlendirilir (L1 NOC/SOC analisti veya daha üst birime). SLA yönetimi NOC’un temel önceliğidir; yaşanan her kesinti için arızanın en kısa sürede giderilmesi amaçlanır.
* **Olay Analizi:** Olay kaydeden ilk seviye (NOC L1 veya SOC L1) koşulları inceledikten sonra gerekirse L2 seviyesine aktarır. NOC L2 mühendisleri kök neden analizine odaklanır, yapılandırma hataları ve performans sorunlarını giderir. SOC L2 analistleri ise detaylı log ve tehdit analizi yaparak saldırının kaynağını belirler, saldırganın kullandığı teknikleri inceler. Örneğin bir brute-force tespitinde IDS/SIEM koordinasyonu, bir fidye yazılımı olayında ise etkilenen makinelerin ağdan izole edilmesi L2/L3 müdahaleye örnektir.
* **Müdahale ve Kurtarma:** NOC, sorunun cinsine göre donanım değişimi, konfigürasyon düzeltmesi veya yamayla müdahale eder ve hizmeti tekrar erişilebilir hale getirir. SOC ise saldırıyı durdurmak için etkilenen sistemleri izole eder, zararlı yazılımı temizler ve gerekli güncellemeleri (patch) uygular. Her iki merkez de müdahale sonuçlarını detaylı şekilde raporlar. NOC’ta ağ performans raporları hazırlanırken, SOC’ta olay sonrası adli analizler yapılır ve yönetim/uyum birimlerine kapsamlı raporlar sunulur.
* **Geri Bildirim ve İyileştirme:** Müdahaleden sonra SOC ekibi saldırı yöntemlerini değerlendirerek güvenlik politikalarını günceller, personel farkındalığı eğitimi düzenler. NOC tarafında ise ağ altyapısı yeniden yapılandırılır, yedekleme prosedürleri gözden geçirilir. Bu kapalı döngü sayesinde sonraki olaylar daha hızlı tespit edilip çözülür.

SOC ve NOC süreçleri birbiriyle iç içe çalışır; örneğin bir DDoS saldırısı hem ağ performansını bozup NOC ekiplerini hem de güvenlik kaygısını yükseltip SOC ekiplerini meşgul. Bu nedenle her iki merkez arasında veri paylaşımı ve koordinasyon hayati önem taşır.

### Kullanılan Araçlar ve Teknolojiler

NOC ve SOC ekipleri, izleme ve müdahaleyi sağlayan çok çeşitli yazılım ve donanım araçlarından faydalanır:

* **SIEM (Güvenlik Bilgisi ve Olay Yönetimi):** Tüm logları toplayıp korelasyon yapar. Splunk, IBM QRadar, ArcSight gibi SIEM çözümleri SOC’da anormallikleri tespit etmek için kullanılır. Örneğin Splunk, SOC analistlerinin sıkça tercih ettiği bir platformdur.
* **IDS/IPS (İzinsiz Giriş Tespit/Önleme Sistemleri):** Ağ trafiğindeki şüpheli aktiviteleri algılar. Snort ve Suricata yaygın tercih edilen IDS/IPS yazılımlarındandır. SOC analistleri bu araçlarla gerçek zamanlı tehditleri yakalar.
* **Firewall ve Ağ Güvenliği:** Palo Alto, Fortinet, Cisco ASA gibi güvenlik duvarları ağ trafiğini kontrol eder ve SOC tarafından yönetilir. Bu araçlar, SOC analistlerinin erişim politikalarını uygulamasını sağlar.
* **Ağ İzleme ve Performans Araçları:** SolarWinds, Nagios, Zabbix gibi araçlar NOC tarafından kullanılır; SNMP tabanlı izleme sayesinde ağ cihazlarının durumu 7/24 takip edilir. NetFlow analiz araçları, trafik trendlerini görüntüler.
* **Ticketing / Olay Yönetimi Sistemleri:** JIRA, ServiceNow gibi bilet takip sistemleri NOC ve SOC süreçlerinde kritik rol oynar. Oluşan her alarm/bilet burada kaydedilir ve müdahale süreci takip edilir. Bu sayede hem operasyonel şeffaflık sağlanır hem müdahale geçmişi belgelenir.
* **Endpoint ve Kurumsal Güvenlik Araçları:** SOC, kurumdaki sunucu ve iş istasyonlarına EDR (Endpoint Detection and Response — uç nokta algılama) ajanları kurar. CrowdStrike, CarbonBlack vb. EDR çözümleri, oturum açma alışkanlıklarını izleyerek olası tehditleri önler. Ayrıca DLP, şifreleme ve veri kaybını önleme sistemleri veri güvenliğini destekler.
* **Otomasyon ve SOAR:** Büyük ölçekli yapılarda SOAR (Security Orchestration, Automation and Response) çözümleri kullanılarak alarmların otomatik sınıflandırılması ve tekrarlayan görevlerin otomatikleştirilmesi sağlanır. Yapay zeka destekli araçlar ise anomali tespitini hızlandırır.

Her iki merkez de ortak dashboard ve paneller kullanarak canlı veri paylaşımı yapabilir. Modern çözümler, SOC ve NOC’un aynı platformda veri paylaşabildiği hibrit yapılar sunar, böylece olaylar hem ağ hem güvenlik perspektifinden eş zamanlı analiz edilir.

### Görev Tanımları ve Roller

SOC ve NOC organizasyonlarındaki roller seviyelere göre ayrılır:

* **NOC Mühendisi (L1):** Sistem ve ağ ekipmanlarının canlı durumunu izler, alarmları değerlendirir, temel sorun giderme yapar ve çözülmeyen olayları üst (L2) birime eskale eder. Ayrıca SLA’ya uygun müdahale için ilk kayıtları oluşturur.
* **NOC Mühendisi (L2):** L1’den gelen karmaşık olayları ele alır. Detaylı kök neden analizi yapar, ağ konfigürasyon hatalarını düzeltir, performans darboğazlarını giderir ve kalıcı çözümler uygular.
* **NOC Mühendisi (L3):** En kritik altyapı problemlerini çözer. Yazılım/donanım arızalarını giderir, mimari düzeyde optimizasyon yapar ve yeni teknoloji entegrasyonlarını gerçekleştirir. Ayrıca ağ güvenliğine yönelik proaktif önlemler geliştirir.
* **NOC Yöneticisi:** NOC ekiplerini koordine eder, operasyonları planlar ve performans raporlarını hazırlar. Kaynak yönetimi ve süreç iyileştirme NOC yöneticisinin sorumluluğundadır.
* **SOC Analisti (L1):** Güvenlik alarmlarını değerlendirir, önceliklendirir ve basit saldırıları analiz eder. Şüpheli aktiviteleri triage ederek hemen müdahale edilmesi gerekenleri belirler. Olayları kayıt altına alır ve standart prosedürlere göre çözümler uygular.
* **SOC Analisti (L2):** Daha karmaşık tehditleri inceler ve müdahale eder. Olayın kaynağını belirlemek için derin analiz yapar, tehdit istihbaratını kullanır ve gerekli durumlarda engelleme, sistem temizleme gibi adımları atar.
* **SOC Analisti (L3) / Tehdit Avcısı:** İleri düzey saldırıları (ör. APT’ler) araştırır ve tehdit avcılığı (threat hunting) yapar. SOC süreçlerini, alarm kurallarını ve oyun planlarını geliştirerek gelecekteki saldırılara karşı proaktif önlemler belirler.
* **SOC Müdürü:** Tüm SOC operasyonunu yönetir, ekip içi eğitim ve işe alım süreçlerini yürütür, güvenlik politikalarının uygulanmasını denetler. Ayrıca üst yönetime raporlama yapar ve uyumluluk gereksinimlerini takip eder.

Her iki merkezde de görevler giderek örtüşmekte; örneğin bazı büyük kuruluşlarda NOC ve SOC ekipleri tek bir **birleşik operasyon merkezi** çatısı altında (örneğin “Fusion Center”) çalışabilmektedir.

### Kariyer Gelişimi ve Sertifikasyonlar

**NOC Kariyeri:** NOC’da genellikle ağ mühendisliği yoluyla ilerlenir. Yeni başlayanlar L1/NOC Teknisyeni olarak başlayıp L2/L3 seviyelerine geçebilir. İleri seviyede “Network Yönetimi” veya “NOC Müdürü” rollerine yükselebilirler. Ağ konfigürasyonları ve sorun çözme odaklı kariyerde **Cisco CCNA/CCNP**, **CompTIA Network+** vb. sertifikalar sıkça tercih edilir. Örneğin CompTIA Network+ sertifikası, özellikle “Network Operations Center (NOC)” ortamında çalışma için temel bilgi sağlar CCNP seviyesinde ise Network Manager gibi orta seviye pozisyonlar hedeflenir.

**SOC Kariyeri:** SOC analisti olarak başlayan kişi, deneyimle birlikte kıdemli analist veya olay müdahale uzmanlığına geçer. Sonrasında SOC Müdürü, Güvenlik Operasyonları Yöneticisi veya CISO gibi üst düzey güvenlik rollerine gelebilir. Bu alanda önemli sertifikalar **CompTIA Security+**, (EC-Council) **Certified SOC Analyst (CSA)** ve **ISC2 CISSP** gibi güvenlik temelli sertifikalardır. Ayrıca SOC analistleri için sıkça Splunk Certified User/Administrator gibi SIEM araçlarına özel sertifikalar önerilir. Bilişim Academy’ye göre, SOC analistleri bu sertifikalar sayesinde tehditleri izleme ve doğru müdahale yapma becerilerini geliştirir. Deneyimli analistler, teknik sertifikaların yanı sıra **CISM, CISA** gibi yönetim/denetim sertifikalarına da yönelir. Kariyer gelişimi açısından, ileri düzey SOC analistleri güvenlik yöneticiliği pozisyonlarına yükselebilirler.

### SOC ve NOC İş Birliği ve Entegrasyonu

Günümüzde güvenlik olaylarının altyapı kesintisine yol açabileceği görülmüş; örneğin bir DDoS saldırısı hem ağ performansını bozup NOC’u hem de güvenliği tehdit edip SOC’u ilgilendirir. Bu nedenle NOC ve SOC ekiplerinin **ayrı kamplar** değil, birbiriyle sürekli veri paylaşıp koordineli çalışan yapılar olması gerekir. Modern çözümler ortak dashboard’lar ve analiz platformları kullanarak her iki ekibin de verileri görüntülemesine ve olayları birlikte değerlendirmesine izin verir. Pratikte bazı kurumlar NOC ile SOC’u tek çatı altında bir “birleşik operasyon merkezi” şeklinde kurar veya entegre ekipler oluşturur. Buna göre, NOC ve SOC birbirinin tamamlayıcısı olarak hareket eder. Doğru entegrasyon, olaylara hem ağ hem de güvenlik açılarından bakılmasını sağlayarak müdahaleyi hem daha hızlı hem de daha etkili hale getirir. Özetle, SOC’un güvenliği, NOC’un sürekliliği sağladığı dijital iş ortamında, her iki merkezin yakın işbirliği dijital varlıkların kesintisiz ve güvenli yönetiminde anahtar rol oynar.

---

### SOC ve NOC Araçları

BT ve siber güvenlik ekiplerine yönelik bu teknik rapor, SOC (Security Operations Center) ve NOC (Network Operations Center) süreçlerinde yaygın olarak kullanılan açık kaynak ve ticari araçları fonksiyonel kategoriler altında derinlemesine ele alır. Her araç için mimari, kurulum, temel konfigürasyon, entegrasyon, ölçekleme, operasyonel en iyi uygulamalar ve yaygın hatalar başlıkları sunulmuştur.

* **NOC odağı:** Erişilebilirlik, kapasite, performans, SLA. (Zabbix, Prometheus, LibreNMS, PRTG, Cacti)
* **SOC odağı:** Tehdit tespiti, olay müdahalesi, log korelasyonu, tehdit avcılığı. (Elastic Stack, Wazuh, Suricata, Zeek, Snort, Security Onion, Graylog, QRadar/Splunk, TheHive/Cortex)
* **Kesişim alanı:** Olay yönetimi, uyarı kanalları, otomasyon (SOAR), ortak veri gölü (Elastic/S3), CMDB/ITSM entegrasyonları (ServiceNow, Jira), ağ tap/SPAN altyapısı, zaman senkronizasyonu (NTP) ve kimlik yönetimi (SSO/LDAP).

**Önerilen üst seviye mimari:**

* **Toplama katmanı:** Beats/Filebeat | Logstash | Syslog-ng | Wazuh Agent | Suricata eve.json | Zeek TSV/JSON.
* **Depolama/Arama:** Elasticsearch/OpenSearch veya Splunk/QRadar (kurumsal).
* **Görselleştirme:** Kibana/Grafana/Graylog UI.
* **İşleme/Korelasyon:** Wazuh kuralları, ElastAlert/Kibana Alerting, Sigma kuralları.
* **Otomasyon (SOAR):** TheHive+Cortex, Shuffle/StackStorm.
* **Olay yönetimi:** TheHive, Jira/ServiceNow.

---

### 1) Ağ & Sistem İzleme (Monitoring / NOC Odaklı)

### 1.1 Zabbix

**Özet:** Kurumsal ölçekte SNMP/Agent tabanlı izleme; trigger, discovery, haritalar, otomasyon.

**Mimari & Bileşenler**

* Zabbix Server, Frontend (PHP), DB (MySQL/PostgreSQL), Proxy (edge toplama), Agent/Agent2.
* Pasif/aktif kontrol, düşük gecikmeli trapper, SNMPv1/v2c/v3, IPMI, JMX, HTTP agent.

**Kurulum (Ubuntu örneği)**

```
wget https://repo.zabbix.com/zabbix/6.0/ubuntu/pool/main/z/zabbix-release_6.0-1+ubuntu22.04_all.deb  
sudo dpkg -i zabbix-release_6.0-1+ubuntu22.04_all.deb && sudo apt update  
sudo apt install -y zabbix-server-pgsql zabbix-frontend-php zabbix-apache-conf zabbix-sql-scripts zabbix-agent2 postgresql  
sudo -u postgres psql -c "CREATE USER zbx WITH PASSWORD 'StrongP@ss';"  
sudo -u postgres psql -c "CREATE DATABASE zabbix OWNER zbx;"  
zcat /usr/share/zabbix-sql-scripts/postgresql/server.sql.gz | psql -U zbx -d zabbix -h 127.0.0.1
```

**Temel Konfigürasyon**

* `/etc/zabbix/zabbix_server.conf`: `DBPassword`, `StartPollers`, `AlertScriptsPath`.
* Agent2 (Go): eBPF eklentileri, Prometheus exporter scraping.

**Entegrasyonlar**

* Webhook ile ServiceNow/Jira/Teams/Slack.
* Zabbix → SIEM: syslog veya HTTP webhook ile Wazuh/Elastic’e olay gönderimi.
* Low-level discovery ile dinamik host/port keşfi; Template repo (Cisco/Juniper/Linux/Windows).

**Ölçekleme & HA**

* Proxy hiyerarşisi, DB için patroni/pgpool-II, frontend çoklama, HA failover (Pacemaker/Keepalived).

**Tuning**

* Trapper ve poller sayıları; Housekeeper periyodu; history/trends retansiyon; TimescaleDB entegrasyonu.

**Yaygın Hatalar**

* Housekeeper tahsisi yetersiz → DB şişmesi. SNMPv3 auth/priv parametre yanlışlığı. Trigger eşikleri gerçekçi değil.

### 1.2 Nagios (Core)

**Özet:** Host/servis health-check; plugin ekosistemi; Icinga çatalları mevcut.

**Kurulum & Konfig**

* `nagios.cfg`, `objects/hosts.cfg`, `services.cfg` ile statik tanım; NRPE/NRDP/NSClient++ ajanları.
* Event handler script’leri ile otomasyon.

**Entegrasyon**

* Grafana/NagiosJSON; SIEM’e syslog. Icinga2 ile modernleştirme.

**Artılar/Eksiler**

* Basit ve kararlı; — Büyük ortamda yönetim yükü yüksek, konfig dosyası karmaşıklığı.

### 1.3 Prometheus + Grafana

**Özet:** Time-series (pull) metrik toplayıcı; PromQL; service discovery; Grafana ile dashboard/alerting.

**Mimari**

* Prometheus server + exporters (node\_exporter, blackbox\_exporter, snmp\_exporter) + Alertmanager.
* Federation, remote\_write (Thanos/Cortex/Mimir) ile uzun süreli saklama.

**Kurulum (container)**

```
# docker-compose.yml (özet)  
services:  
  prometheus:  
    image: prom/prometheus  
    volumes:  
      - ./prometheus.yml:/etc/prometheus/prometheus.yml  
  alertmanager:  
    image: prom/alertmanager  
  grafana:  
    image: grafana/grafana
```

**Konfig (SNMP Exporter)**

* `snmp.yml` community/OID haritaları; LibreNMS verisi ile korelasyon.

**Entegrasyon**

* Alertmanager → Slack/Email/Webhook → TheHive/StackStorm.
* Grafana Alerting; Grafana Loki/Tempo/Tempo-OTEL ile birleşik gözlemlenebilirlik.

### 1.4 LibreNMS

**Özet:** SNMP keşif, otomatik haritalar, RANCID/Oxidized entegrasyonu, syslog/alerting.

**Kurulum**

* PHP+Nginx+MariaDB; Oxidized ile config backup; Syslog ve SNMP trap receiver.

**Artılar/Eksiler**

* Ağ ekipmanları için hazır şablonlar; — Büyük ölçekte DB/Redis tuning gerekebilir.

### 1.5 PRTG (ticari kısa not) & 1.6 Cacti

* **PRTG:** Sensör tabanlı lisanslama, auto-discovery, haritalar, kolay kurulabilir.
* **Cacti:** RRDTool tabanlı grafikleme; SNMP ile trafik/port tarihçesi; düşük kaynak.

---

### 2) Log Yönetimi & SIEM (SOC Çekirdeği)

### 2.1 Elastic Stack (Elasticsearch + Logstash + Kibana + Beats)

**Özet:** Merkezi log, arama, analitik, görselleştirme; X-Pack güvenlik; Elastic Security (SIEM) modülü.

**Mimari**

* Data/master/ingest node ayrımı; ILM (index lifecycle), hot-warm-cold; CCR/Snapshot-S3.
* Beats ailesi: Filebeat (modüller: system, nginx, suricata), Winlogbeat, Auditbeat, Packetbeat, Metricbeat.

**Kurulum — Özet**

```
# Elasticsearch & Kibana (Debian/Ubuntu kısaltılmış)  
sudo apt install elasticsearch kibana  
# Güvenlik: built-in users, TLS; kibana.yml: elasticsearch.hosts, server.publicBaseUrl
```

**Logstash Pipeline Örneği**

```
input { beats { port => 5044 } }  
filter { geoip { source => "[source][ip]" } }  
output { elasticsearch { hosts => ["http://es1:9200"] index => "logs-%{[@metadata][beat]}-%{+YYYY.MM.dd}" } }
```

**Alarming**

* Kibana Alerting/Rules; ElastAlert (topluluk); SIEM dedected rules + Sigma → ES Queries.

**Entegrasyon**

* Wazuh Manager/Indexer/Dashboard (Elastic’e dayalı).
* Suricata `eve.json` ve Zeek logları için Filebeat modülleri.
* TheHive/Shuffle webhook; SOAR playbook tetikleme.

**Ölçekleme & Tuning**

* Heap = min(node RAM/2, 31GB); shard ve refresh interval ayarları; ILM ile rollover; Hot-Warm mimarisi.
* Ingest pipeline (grok/dissect), ECS şeması; dedup ve sampling.

**Yaygın Hatalar**

* Aşırı shard sayısı; tek node’a çok rol; JVM GC baskısı; indekste mapping patlaması.

### 2.2 Wazuh (SIEM + XDR)

**Özet:** OSSEC tabanlı HIDS/XDR; FIM, rootkit, zafiyet, uyumluluk; Active Response; Elastic üzerine.

**Mimari**

* Wazuh Manager, Indexer (ES), Dashboard (Kibana app), Agents.
* Agent–manager TLS, UDP fallback; agentless syslog toplayıcı.

**Kurulum — Özet**

```
curl -s https://packages.wazuh.com/4.x/install.sh | bash  
# veya bileşen bazlı kurulum; agent için: WAZUH_MANAGER="10.0.0.10" ./wazuh-agent.sh
```

**Agent Konfig (Linux)**

```
<ossec_config>  
  <client><server><address>10.0.0.10</address></server></client>  
  <syscheck><directories check_all="yes">/etc,/var/www</directories></syscheck>  
  <active-response><command>host-deny</command><location>local</location></active-response>  
</ossec_config>
```

**Entegrasyon**

* Suricata/Zeek/Snort log ingest; VT/YARA ile malware tespiti; AWS/Azure/GCP modülleri.
* TheHive, ServiceNow; Sigma kuralları → Wazuh.

**Tuning**

* Kuralların özelleştirilmesi (local\_rules.xml), SCA policy, FIM исключe; agent grup yönetimi.

**Yaygın Hatalar**

* Aşırı gürültü (noise) → kural bastırma eksik; agent saat/sertifika sorunları.

### 2.3 Graylog

**Özet:** Elasticsearch/OpenSearch destekli merkezi log; pipeline processors; stream/alert.

**Kurulum**

* Graylog Server + MongoDB + ES/OS cluster; GELF/Beats input.

**Artılar/Eksiler**

* Basit kurulum/UI; — ES bağımlılığı, yüksek hacimde ölçekleme gerekleri.

### 2.4 Ticari: QRadar, Splunk; Açık Kaynak: OSSIM, Security Onion

* **QRadar:** DSM (device support), offense motoru, AQL, flows (QFlow), Ariel DB.
* **Splunk:** Indexer/SH/CM/DS rolleri, SPL dili, ES (Enterprise Security) app, SOAR.
* **OSSIM:** AlienVault tabanlı açık kaynak, temel korelasyon ve HIDS entegrasyonları.
* **Security Onion:** Entegre platform; Zeek+Suricata+Elastic+SO Console; hızlı kurulum profilleri.

---

### 3) Ağ Tabanlı Tehdit Tespiti (IDS/IPS & NDR)

### 3.1 Snort (2.x/3.x)

**Mimari**

* Packet Decoder → Preprocessors → Detection Engine → Output.
* Snort3: Lua konfig, çok iş parçacığı, DAQ geliştirmeleri.

**Kurulum/Çalıştırma**

```
sudo apt install snort  
snort -c /etc/snort/snort.conf -i eth0 -A fast
```

**Temel Ayarlar**

* `ipvar HOME_NET 10.0.0.0/8`; `rule-path`; Talos/ET kural setleri; preprocessors (frag3, stream5).

**IPS Modu**

* Inline: NFQUEUE/AF\_PACKET; iptables ile yönlendirme.

**Entegrasyon**

* Unified2/JSON → Filebeat/Logstash; Wazuh rule mapping; Security Onion rolleri.

**Tuning**

* Kural seçimi (policy), fast\_pattern, flowbits optimizasyonu; CPU pinning.

### 3.2 Suricata

**Mimari**

* Multi-thread; AF\_PACKET/PF\_RING/DPDK; detection engine + app-layer parsers.
* Çıktı: `eve.json`, `fast.log`, `stats.log`, pcap-log (alert/flow based).

**Kurulum**

```
sudo add-apt-repository ppa:oisf/suricata-stable -y  
sudo apt install suricata
```

**Konfig (özet)**

```
vars:  
  address-groups:  
    HOME_NET: [10.0.0.0/8]  
outputs:  
  - eve-log:  
      enabled: yes  
      filetype: regular  
      filename: /var/log/suricata/eve.json  
af-packet:  
  - interface: eth0  
    cluster-type: cluster_flow
```

**Entegrasyon**

* Filebeat suricata module; Wazuh integration; ET/Open/Pro kural setleri; Hyperscan.

**Tuning**

* `max-pending-packets`, `detect-thread-ratio`; NIC RSS, IRQ pinning; hyperscan enable.

### 3.3 Zeek (Bro)

**Mimari**

* Protocol analyzers; ZeekControl; cluster: manager/proxy/workers.
* Loglar: `conn.log`, `dns.log`, `http.log`, `ssl.log`, `notice.log`, `weird.log`.

**Kurulum**

```
sudo apt install zeek  
zeekctl deploy
```

**Scripting**

* `notice` framework; intel feeds; file extraction; DCE/RPC, SMB, TLS detayları.

**Entegrasyon**

* Filebeat zeek module; Elastic ECS mapping; Wazuh JSON ingest; Security Onion native.

**Tuning**

* Load balancing (PF\_RING/AF\_Packet + cluster); disk IO (log rotation/compress).

### 3.4 Arkime (Moloch)

**Özet:** Büyük ölçekli PCAP yakalama, indeksleme (Elastic/OpenSearch), web UI ile hızlı arama.

**Kurulum/Notlar**

* Capture node + Viewer + ES cluster; PCAP ring buffer; SPI index alanları.
* SO/ELK ile korelasyon; disk throughput kritik (NVMe önerilir).

### 3.5 Wireshark/tcpdump

* Derinlemesine paket analizi, pcap filtreleri; IR sırasında altın değerinde.

---

### 4) Uç Nokta Güvenliği (EDR/XDR/HIDS)

### 4.1 Fail2Ban

**Özet:** Log tabanlı brute-force engelleme (iptables/nftables), jails + filters.

**Kurulum/Temel Konfig**

```
sudo apt install fail2ban  
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local  
# sshd jail örneği  
[sshd]  
enabled = true  
port = 22  
maxretry = 5  
bantime = 1h  
logpath = /var/log/auth.log
```

**Entegrasyon**

* Syslog/Filebeat → Elastic/Wazuh; TheHive webhook (ban event → case).

**Tuning**

* CIDR ignoreip, incremental bantime, recidive jail; ipset ile hızlı drop.

### 4.2 OSSEC (Wazuh içinde)

* Syscheck (FIM), rootcheck, active response; tek başına veya Wazuh ile genişletilmiş.

### 4.3 CrowdStrike Falcon (ticari kısa not)

* Bulut tabanlı EDR/XDR; sensör ajan; gerçek zamanlı telemetri; RTR; Threat Intel.

### 4.4 Thor Project (Nextron)

* YARA/Sigma/IOC taraması; IR ve tehdit avcılığı; triage paketleri; Linux/Windows desteği.

---

### 5) Tehdit İstihbaratı (CTI / IOC)

### 5.1 MISP

**Özet:** IOC paylaşım platformu (hash, domain, IP, yara, sigma); taksonomi & galaxy; sync/feeds.

**Entegrasyon**

* Zeek intel framework; Suricata `threshold`/`reputation` listeleri; Wazuh enrich; TheHive tasking.

### 5.2 OpenCTI / Yeti

* Varlık modeli (intrusion-set, malware, TTP); connector’lar (MITRE, VirusTotal, MISP sync).

### 5.3 Ticari Intel

* CrowdStrike, Anomali, Recorded Future — API ile SIEM/SOAR zenginleştirme.

---

### 6) Olay Yönetimi & IR (SOAR)

### 6.1 TheHive Project

Case management, observable yönetimi, TLP/Sensitivity, görev iş akışları.

**Kurulum**

* TheHive + Cassandra/Elastic; Cortex ile entegre; webhooks.

### 6.2 Cortex

Analyzer/Responder ekosistemi (VT, HybridAnalysis, MISP, Mail, Slack, Wazuh ban vb.).

### 6.3 Shuffle / StackStorm

No-code/low-code playbook’lar; webhook/SIEM tetik; IR otomasyonu (containment, ticket açma).

---

### 7) Malware Analizi & Dijital Forensics

### 7.1 Cuckoo Sandbox

İzole VM’lerde dinamik analiz; network capture; Suricata/Zeek ile korelasyon; raporlar (JSON/HTML).

### 7.2 Volatility

Bellek dökümü analizi; eklentiler: malfind, psxview, netscan; Windows/Linux profilleri.

### 7.3 Autopsy/Sleuth Kit

Dosya sistemi zaman çizelgesi, artefakt analizi; disk imajları; hash set karşılaştırma.

### 7.4 YARA

İmza tabanlı dosya taraması; rules repo; Wazuh/Cortex entegrasyonu (on-demand scan).

---

### Hızlı Başlangıç Senaryoları

* **KOBİ SOC:** Security Onion (standalone) + Wazuh Agents + Filebeat modülleri + TheHive (tek sunucu) + Zabbix (ayrı VM).
* **Kurumsal SOC/NOC:** Ayrık ES hot/warm cluster, çoklu Suricata/Zeek sensörü, Wazuh manager HA, Prometheus+Grafana, Zabbix proxy’leri, SOAR (Shuffle) ve ITSM entegrasyonu.

### Sonuç

Bu rapor, SOC ve NOC ekiplerinin günlük operasyonlarında ihtiyaç duyduğu çekirdek araçları fonksiyonel kategoriler altında toplamış ve her birinin hızlı kurulum, konfigürasyon, entegrasyon ve ölçekleme perspektiflerini sunmuştur. Kurumsal olgunluk düzeyi yükseldikçe, araçların birbirleriyle entegrasyonu (SIEM + NDR + HIDS + SOAR + ITSM) başarı için belirleyicidir. En iyi sonuçlar; doğru mimari, gürültü azaltımı, otomasyon ve sürdürülebilir veri yaşam döngüsü politikalarıyla elde edilir.