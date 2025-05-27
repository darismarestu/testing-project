Feature: Find Patient Record

Scenario: TS_FPR_01 - Search Patient Record
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
    When Meng-klik Find Patient Record menu
    Then Menampilkan halaman Find Patient Record
    When Search patient John Green
    Then Menampilkan hasil pencarian patient John Green
    When View patient John Green
    Then Menampilkan detail patient John Green
    When Meng-klik show contact info
    Then Show contact info expanded
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login

Scenario: TS_FPR_02 - Invalid Search Patient Record
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
    When Meng-klik Find Patient Record menu
    Then Menampilkan halaman Find Patient Record
    When Search patient Spiderman
    Then Menampilkan hasil pencarian No matching records found
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login

Scenario: TS_FPR_03 - Pagination Find Patient Record
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
    When Meng-klik Find Patient Record menu
    Then Menampilkan halaman Find Patient Record
    When Search patient John
    Then Menampilkan hasil pencarian patient John
    When Meng-klik tombol next
    When Meng-klik tombol prev
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login
