Feature: Active Visits

Scenario: TS_AV_01 - Search Active Visits
    When Membuka halaman login
    Then Berhasil Menampilkan laman Login
    When Memasukan username admin
    Then Berhasil memasukan username admin
    When Memasukan password Admin123
    Then Berhasil memasukan password Admin123
    When Memilih Location for this session Outpatient Clinic
    Then Berhasil Memilih Location for this session Outpatient Clinic
    When Meng-klik tombol Login
    Then Menampilkan homepage
    When Meng-klik menu Active Visits
    Then Menampilkan halaman Active Visits
    When Search active visits John Smith
    Then Menampilkan hasil pencarian active visits John Smith
    When View active visits John Smith
    Then Menampilkan detail patient John Smith
    When Meng-klik show contact info
    Then Show contact info expanded
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login
