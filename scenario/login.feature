Feature: Login

Scenario: <TS> - Valid Login in <Location>
    When Membuka halaman login
    Then Berhasil Menampilkan laman Login
    When Memasukan username admin
    Then Berhasil memasukan username admin
    When Memasukan password Admin123
    Then Berhasil memasukan password Admin123
    When Memilih Location for this session <Location>
    Then Berhasil Memilih Location for this session <Location>
    When Meng-klik tombol Login
    Then Menampilkan homepage
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login

    Examples:
        | TS          | Location          |
        | TS_LOGIN_01 | Inpatient Ward    |
        | TS_LOGIN_02 | Isolation Ward    |
        | TS_LOGIN_03 | Laboratory        |
        | TS_LOGIN_04 | Outpatient Clinic |
        | TS_LOGIN_05 | Pharmacy          |
        | TS_LOGIN_06 | Registration Desk |