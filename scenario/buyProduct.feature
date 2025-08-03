Feature: Buy Product

Scenario: Buy Backpack
    When Membuka halaman login
    Then Berhasil Menampilkan laman Login
    When Memasukan username standard_user
    Then Berhasil memasukan username standard_user
    When Memasukan password secret_sauce
    Then Berhasil memasukan password secret_sauce
    When Meng-klik tombol Login
    Then Menampilkan homepage
    When Click add to cart backpack
    Then Berhasil memasukan backpack ke keranjang
    When Click icon keranjang
    Then Menampilkan halaman cart list
    When Click button checkout
    Then Berhasil menampilkan halaman checkout info
    When Memasukan first name John
    Then Berhasil memasukan first name John
    When Memasukan last name Doe
    Then Berhasil memasukan last name Doe
    When Memasukan postal code 1234
    Then Berhasil memasukan postal code 1234
    When Click button continue
    Then Berhasil menampilkan halaman checkout summary
    When Click button finish
    Then Berhasil menampilkan halaman checkout complete
    When Click button back to home
    Then Menampilkan homepage
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login
