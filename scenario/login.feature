Feature: Login

Scenario: Valid Login
    When Membuka halaman login
    Then Berhasil Menampilkan laman Login
    When Memasukan username standard_user
    Then Berhasil memasukan username standard_user
    When Memasukan password secret_sauce
    Then Berhasil memasukan password secret_sauce
    When Meng-klik tombol Login
    Then Menampilkan homepage
    # When Meng-klik tombol Logout
    # Then Berhasil Menampilkan laman Login
