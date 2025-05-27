Feature: Register A Patient

Scenario: TS_RAP_01 - Register A Patient
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
    When Meng-klik Register A Patient menu
    Then Menampilkan halaman Register A Patient
    When Menginput field given name John
    Then Berhasil menginput field given name John
    When Menginput field middle name D
    Then Berhasil menginput field middle name D
    When Menginput field family name Doe
    Then Berhasil menginput field family name Doe
    When Mengklik next button
    Then Menampilkan section gender 
    When Memilih field gender Male
    Then Berhasil memilih field gender Male
    When Mengklik next button
    Then Menampilkan section birthdate 
    When Menginput field day birthdate 20
    Then Berhasil menginput field day birthdate 20
    When Memilih field month birthdate January
    Then Berhasil memilih field month birthdate January
    When Menginput field year birthdate 2000
    Then Berhasil menginput field year birthdate 2000
    When Mengklik next button
    Then Menampilkan section address 
    When Menginput field address Green Lake
    Then Berhasil menginput field address Green Lake
    When Menginput field address2 Green Garden
    Then Berhasil menginput field address2 Green Garden
    When Menginput field city Jakarta
    Then Berhasil menginput field city Jakarta
    When Menginput field state DKI Jakarta
    Then Berhasil menginput field state DKI Jakarta
    When Menginput field country Indonesia
    Then Berhasil menginput field country Indonesia
    When Menginput field postal code 1234
    Then Berhasil menginput field postal code 1234
    When Mengklik next button
    Then Menampilkan section phone number
    When Menginput field phone number 081234512345
    Then Berhasil menginput field phone number 081234512345
    When Mengklik next button
    Then Menampilkan section relatives
    When Memilih field relationship type Doctor
    Then Berhasil memilih field relationship type Doctor
    When Menginput field persone name Maria
    Then Berhasil menginput persone name Maria
    When Mengklik next button
    Then Menampilkan section confirm
    When Mengklik confirm button
    Then Menampilkan registered patient John D Doe
    When Meng-klik show contact info
    Then Show contact info expanded
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login

Scenario: TS_RAP_02 - Register Unidentified Patient
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
    When Meng-klik Register A Patient menu
    Then Menampilkan halaman Register A Patient
    When Menceklist checkbox Unidentified Patient
    Then Menampilkan section gender 
    When Memilih field gender Male
    Then Berhasil memilih field gender Male
    When Mengklik next button
    Then Menampilkan section confirm
    When Mengklik confirm button
    Then Menampilkan detail patient UNKNOWN UNKNOWN
    When Meng-klik show contact info
    Then Show contact info expanded
    When Meng-klik tombol Logout
    Then Berhasil Menampilkan laman Login