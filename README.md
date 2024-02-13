
#### 1. SEARCH Enginee Optimize (SEO)
menggunakna <!DOCTYPE>, <meta></meta>, dan juga penempatan tag heading (<h1>, <h2>, <h3>) dengan benar


#### 2. 
 - Cookie lebih kecil ukurannya 
 - sessionStorage ukurannya lebih besar dari cookie Data disimpan hanya untuk tab yang sama, dan akan dihapus ketika tab atau jendela ditutup.
 - localStorage lebih besar dan tidak akan hilang walau sudah di tutup browser nya sampai di hapus 

 ### 3. 
 GET = untuk mengambil data (read / ouput)
 POST = untuk Membuat data (write / input)

 #### 4. 
 layer A memilihi z-index 0 dan layer B memilihi z-index 1  layer B berada di atas layer A seperti tumpukan


 #### 5.
 display :none  
 atau
 position absolute
 overflow: hidden 
 clip: rect(top, right, bottom, left)

#### 6.
secara general this di gunakan untuk memamnggil object saat itu atau method yang saat itu digunakan jika tidak ada dia akan mengambil nya dari global environment seperti window di browser dan global di node js, 


#### 7
1. Svelte
2. Solid, preReact
3. Vue / angular
4. React /Express


#### 8.

contoh kita punya function untuk melakukan get

// Contoh 1  Fungsi asynchronous dengan async/await
const getData = async () => { // 1. kita menggukan async di sini untuk mengubah behavior function itu menjadi asynchronous buakan synchronous
    const response = await fetch('https://api.example.com/data'); // 2. menambahkan await untuk menunggu sampai proses Mengambil data dari API selesai
    const data = await response.json(); // 3. Mengubah respons ke dalam format JSON
    return data; // return Mengembalikan data 
}

// Contoh 2 Memanggil fungsi getData
const fetchData = async () => {
    try {
        const result = await getData(); // Menunggu hasil getData
        console.log(result); // Melakukan sesuatu dengan hasil data
    } catch (error) {
        console.error('Error fetching data:', error); // Menangani kesalahan jika ada
    }
}

fetchData(); // Memanggil fungsi untuk mengambil data


#### 9.
- 1.single page aplication (SPA) 
SPA adalah aplikasi web yang terdiri dari satu halaman HTML yang memuat semua sumber daya (HTML, CSS, JavaScript) yang diperlukan.
Saat pengguna berinteraksi dengan aplikasi, konten diubah secara dinamis tanpa perlu memuat ulang seluruh halaman.
Navigasi antar halaman dilakukan tanpa perlu memuat ulang halaman secara penuh, biasanya dengan menggunakan teknik seperti AJAX untuk mengambil dan menampilkan konten baru.
Contoh framework yang sering digunakan untuk membangun SPA adalah React, Angular, dan Vue.js.

- 2. Progressive web aplication (PWA) 
PWA adalah aplikasi web yang dikembangkan menggunakan teknologi web modern untuk memberikan pengalaman pengguna yang mirip dengan aplikasi native.
Fitur utama PWA termasuk kemampuan untuk bekerja secara offline, pemasangan ke layar beranda, dan akses ke berbagai fitur perangkat seperti kamera, geolokasi, dan pemberitahuan.
PWA dapat diakses melalui browser web tanpa harus diunduh dari toko aplikasi, tetapi pengguna dapat memasangnya ke layar beranda perangkat mereka untuk akses yang lebih cepat.
PWA dapat diakses melalui browser web mana pun yang mendukung teknologi terkini seperti Service Workers dan manifest file.
PWA dapat menyediakan pengalaman yang responsif dan menyenangkan bagi pengguna, terlepas dari perangkat atau platform yang mereka gunakan.



#### 10
Promise adalah objek JavaScript yang mewakili nilai yang belum diketahui pada saat pembuatannya. Ini memungkinkan kita untuk melakukan operasi asynchronous, dan ketika operasi tersebut selesai, promise dapat dipenuhi (fulfilled) dengan nilai atau ditolak (rejected) dengan alasan tertentu.

Sebuah promise memiliki tiga status:

Pending: Status awal dari sebuah promise, artinya operasi masih berlangsung dan belum selesai.
Fulfilled: Status dimana operasi berhasil selesai dan promise dipenuhi dengan nilai yang diharapkan.
Rejected: Status dimana operasi mengalami kegagalan atau ditolak dengan alasan tertentu.

// Contoh fungsi yang mengembalikan promise
function getData() {
    // Menggunakan promise untuk operasi asynchronous (misalnya, pengambilan data dari server)
    return new Promise((resolve, reject) => {
        // Simulasi pengambilan data dari server dengan setTimeout
        setTimeout(() => {
            const data = Math.random(); // Contoh data yang dihasilkan secara acak
            if (data < 0.5) {
                resolve(data); // Promise dipenuhi jika data kurang dari 0.5
            } else {
                reject('Data tidak valid'); // Promise ditolak jika data lebih besar dari atau sama dengan 0.5
            }
        }, 1000); // Simulasi waktu pengambilan data: 1 detik
    });
}

// Menggunakan promise untuk menangani hasil dari operasi asynchronous
getData()
    .then((result) => {
        console.log('Data yang diterima:', result); // Menampilkan data jika promise dipenuhi
    })
    .catch((error) => {
        console.error('Error:', error); // Menampilkan pesan error jika promise ditolak
    });


#### 11
a. Welcome to PCS! //string
b "10000" //string


##### 12
let data = {
  "code": 200,
  "msg": "oke",
  "data": [
    { "id": 14, "name": "building.create" },
    { "id": 16, "name": "building.delete" },
    { "id": 15, "name": "build.edit" },
    { "id": 13, "name": "build.index" },
    { "id": 33, "name": "dashboard.index" },
    { "id": 18, "name": "energy.create" },
    { "id": 20, "name": "energy.delete" },
    { "id": 19, "name": "energy.edit" }
  ]
};

let transformedData = {
  "code": 200,
  "msg": "oke",
  "data": {
    "Building": [],
    "Dashboard": [],
    "Energy": []
  }
};

data.data.forEach(item => {
  if (item.name.includes("building")) {
    transformedData.data.Building.push(item);
  } else if (item.name.includes("dashboard")) {
    transformedData.data.Dashboard.push(item);
  } else if (item.name.includes("energy")) {
    transformedData.data.Energy.push(item);
  }
});

console.log(JSON.stringify(transformedData, null, 2));



##### 13

// Ganti dengan kunci API Anda dari AccuWeather
const apiKey = 'YOUR_ACCUWEATHER_API_KEY';
const locationKey = 'YOUR_LOCATION_KEY';

async function getTodayTemperature() {
    try {
        // Menggunakan fetch untuk mengambil data cuaca
        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
        
        // Menangani respon HTTP
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        // Mengubah respon ke dalam format JSON
        const data = await response.json();

        // Mendapatkan suhu hari ini dari data JSON
        const todayTemperature = data[0].Temperature.Metric.Value;

        return todayTemperature;
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null;
    }
}

// Contoh penggunaan
getTodayTemperature().then((temperature) => {
    if (temperature !== null) {
        console.log(`Suhu hari ini: ${temperature}°C`);
    } else {
        console.log('Gagal mendapatkan suhu hari ini.');
    }
});


#### 14

<form id='modal_input_form' class='form' action="#">
  <label class="fs-6 fw-semibold form-label mb-2"></label>
  <input
    class="form-control form-control-solid"
    placeholder="Enter a permision name"
    name="name"
    id="name"
  />
  <div class="fv-plugin-message-container invalid-feedback"></div>
  <div class="text-center pt-15"></div>
</form>


// Ambil semua elemen <div> dengan kelas 'invalid-feedback' di dalam formulir
const invalidFeedbackDivs = document.querySelectorAll('#modal_input_form .invalid-feedback');

// Loop melalui setiap elemen dan mengisinya dengan teks pesan
invalidFeedbackDivs.forEach(div => {
    div.textContent = 'Input tidak valid'; // Ganti pesan sesuai kebutuhan
});


#### 15
1. Local Storage dan Session Storage:
2. Cache API (redis)
3. CDN (Content Delivery Network) Caching
4. Service Workers 


#### 16
lifecycle SW Download/Register, Install, Activate
1. register SW: navigator.serviceWorker.register()
2. Installasi Sw: browser akan mendownload dan menginstal Service Worker. menentukan sumber daya yang perlu disimpan dalam cache untuk digunakan saat aplikasi berjalan dalam mode offline.
3. Aktivasi SW: Setelah diinstal, Service Worker akan diaktifkan untuk mengendalikan perilaku jaringan dan cache sesuai dengan logika yang Anda tentukan dalam skrip Service Worker.
4. Interaksi dengan Peristiwa Jaringan dan Cache: Service Worker dapat berinteraksi dengan peristiwa jaringan, seperti permintaan HTTP, dan peristiwa cache, seperti menyimpan atau mengambil sumber daya dari cache. Anda dapat menentukan perilaku khusus untuk setiap peristiwa, seperti mengambil sumber daya dari cache saat koneksi jaringan tidak tersedia.

// main.js (file JavaScript yang dimuat di halaman web)

// Mendaftarkan Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}


// service-worker.js (file Service Worker)

// Event listener untuk peristiwa installasi Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-cache')
            .then(cache => {
                return cache.addAll([
                    '/',
                    '/index.html',
                    '/styles.css',
                    '/script.js'
                    // Tambahkan sumber daya lain yang perlu disimpan dalam cache
                ]);
            })
    );
});

// Event listener untuk peristiwa fetch (pengambilan sumber daya)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response; // Mengembalikan sumber daya dari cache jika tersedia
                }
                return fetch(event.request); // Mengambil sumber daya dari jaringan jika tidak tersedia dalam cache
            })
    );
});


#### 17
PCSGRAPH
###### to run
`yarn && yarn dev`