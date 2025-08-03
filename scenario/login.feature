Feature: Login

Scenario: Valid Login
    When Membuka halaman login
    Then Berhasil Menampilkan laman Login
    When Memasukan username admin
    Then Berhasil memasukan username admin
    When Memasukan password Admin123
    Then Berhasil memasukan password Admin123
    When Meng-klik tombol Login
    Then Menampilkan homepage
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login
