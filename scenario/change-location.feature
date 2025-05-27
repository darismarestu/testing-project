Feature: Change Locations

Scenario: TS_CL_01 - Change Locations
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
    When Meng-klik select location
    Then Menampilkan section location
    When Memilih location Pharmacy
    Then Berhasil memilih location Pharmacy
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login
