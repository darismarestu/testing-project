Feature: Capture Vitals

Scenario: TS_CV_01 - Search Capture Vitals
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
    When Meng-klik Capture Vitals menu
    Then Menampilkan halaman Capture Vitals
    When Search patient John Green
    Then Menampilkan hasil pencarian patient John Green
    When View patient John Green
    Then Menampilkan detail patient John Green
    When Meng-klik show contact info
    Then Show contact info expanded
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login

Scenario: TS_CV_02 - Invalid Search Capture Vitals
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
    When Meng-klik Capture Vitals menu
    Then Menampilkan halaman Capture Vitals
    When Search patient Spiderman
    Then Menampilkan hasil pencarian No matching records found
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login

Scenario: TS_CV_03 - Pagination Capture Vitals
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
    When Meng-klik Capture Vitals menu
    Then Menampilkan halaman Capture Vitals
    When Search patient John
    Then Menampilkan hasil pencarian patient John
    When Meng-klik tombol next
    When Meng-klik tombol prev
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login
