const words = [
    // Bagian 1
    // English → Indonesian
    { word: 'artist', translation: 'seniman' },
    { word: 'actor', translation: 'aktor' },
    { word: 'author', translation: 'pengarang' },
    { word: 'architect', translation: 'arsitek' },
    { word: 'assistant', translation: 'asisten' },
    { word: 'baker', translation: 'pembuat roti' },
    { word: 'barber', translation: 'tukang cukur' },
    { word: 'banker', translation: 'bankir' },
    { word: 'builder', translation: 'pembangun' },
    { word: 'butcher', translation: 'tukang daging' },
    // { word: 'babysitter', translation: 'pengasuh anak' },
    // { word: 'chef', translation: 'koki' },
    // { word: 'carpenter', translation: 'tukang kayu' },
    // { word: 'clerk', translation: 'petugas' },
    // { word: 'coach', translation: 'pelatih' },
    // { word: 'cleaner', translation: 'pembersih' },
    // { word: 'cashier', translation: 'kasir' },
    // { word: 'doctor', translation: 'dokter' },
    // { word: 'dentist', translation: 'dokter gigi' },
    // { word: 'driver', translation: 'pengemudi' },
    // { word: 'designer', translation: 'perancang' },
    // { word: 'director', translation: 'direktur' },
    // { word: 'dancer', translation: 'penari' },
    // { word: 'engineer', translation: 'insinyur' },
    // { word: 'editor', translation: 'editor' },
    // { word: 'electrician', translation: 'tukang listrik' },
    // { word: 'entrepreneur', translation: 'pengusaha' },
    // { word: 'educator', translation: 'pendidik' },
    // { word: 'economist', translation: 'ekonom' },
    // { word: 'farmer', translation: 'petani' },
    // { word: 'firefighter', translation: 'pemadam kebakaran' },
    // { word: 'fisherman', translation: 'nelayan' },
    // { word: 'florist', translation: 'penjual bunga' },
    // { word: 'fashion designer', translation: 'perancang busana' },
    // { word: 'film maker', translation: 'pembuat film' },
    // { word: 'gardener', translation: 'tukang kebun' },
    // { word: 'guide', translation: 'pemandu' },
    // { word: 'geologist', translation: 'ahli geologi' },
    // { word: 'gymnast', translation: 'pesenam' },
    // { word: 'guitarist', translation: 'pemain gitar' },
    // { word: 'governor', translation: 'gubernur' },
    // { word: 'hairdresser', translation: 'penata rambut' },
    // { word: 'housekeeper', translation: 'pembantu rumah tangga' },
    // { word: 'historian', translation: 'sejarawan' },
    // { word: 'host', translation: 'pembawa acara' },
    // { word: 'humanitarian', translation: 'humanis' },
    // { word: 'hunter', translation: 'pemburu' },
    // { word: 'inventor', translation: 'penemu' },
    // { word: 'instructor', translation: 'instruktur' },
    // { word: 'inspector', translation: 'inspektur' },

    // Indonesian → English
    { word: 'seniman', translation: 'artist' },
    { word: 'aktor', translation: 'actor' },
    { word: 'pengarang', translation: 'author' },
    { word: 'arsitek', translation: 'architect' },
    { word: 'asisten', translation: 'assistant' },
    { word: 'pembuat roti', translation: 'baker' },
    { word: 'tukang cukur', translation: 'barber' },
    { word: 'bankir', translation: 'banker' },
    { word: 'pembangun', translation: 'builder' },
    { word: 'tukang daging', translation: 'butcher' },
    // { word: 'pengasuh anak', translation: 'babysitter' },
    // { word: 'koki', translation: 'chef' },
    // { word: 'tukang kayu', translation: 'carpenter' },
    // { word: 'petugas', translation: 'clerk' },
    // { word: 'pelatih', translation: 'coach' },
    // { word: 'pembersih', translation: 'cleaner' },
    // { word: 'kasir', translation: 'cashier' },
    // { word: 'dokter', translation: 'doctor' },
    // { word: 'dokter gigi', translation: 'dentist' },
    // { word: 'pengemudi', translation: 'driver' },
    // { word: 'perancang', translation: 'designer' },
    // { word: 'direktur', translation: 'director' },
    // { word: 'penari', translation: 'dancer' },
    // { word: 'insinyur', translation: 'engineer' },
    // { word: 'editor', translation: 'editor' },
    // { word: 'tukang listrik', translation: 'electrician' },
    // { word: 'pengusaha', translation: 'entrepreneur' },
    // { word: 'pendidik', translation: 'educator' },
    // { word: 'ekonom', translation: 'economist' },
    // { word: 'petani', translation: 'farmer' },
    // { word: 'pemadam kebakaran', translation: 'firefighter' },
    // { word: 'nelayan', translation: 'fisherman' },
    // { word: 'penjual bunga', translation: 'florist' },
    // { word: 'perancang busana', translation: 'fashion designer' },
    // { word: 'pembuat film', translation: 'film maker' },
    // { word: 'tukang kebun', translation: 'gardener' },
    // { word: 'pemandu', translation: 'guide' },
    // { word: 'ahli geologi', translation: 'geologist' },
    // { word: 'pesenam', translation: 'gymnast' },
    // { word: 'pemain gitar', translation: 'guitarist' },
    // { word: 'gubernur', translation: 'governor' },
    // { word: 'penata rambut', translation: 'hairdresser' },
    // { word: 'pembantu rumah tangga', translation: 'housekeeper' },
    // { word: 'sejarawan', translation: 'historian' },
    // { word: 'pembawa acara', translation: 'host' },
    // { word: 'humanis', translation: 'humanitarian' },
    // { word: 'pemburu', translation: 'hunter' },
    // { word: 'penemu', translation: 'inventor' },
    // { word: 'instruktur', translation: 'instructor' },
    // { word: 'inspektur', translation: 'inspector' },

    // // Bagian 2
    // // English → Indonesian
    // { word: 'interpreter', translation: 'penerjemah lisan' },
    // { word: 'illustrator', translation: 'ilustrator' },
    // { word: 'investigator', translation: 'penyelidik' },
    // { word: 'journalist', translation: 'jurnalis' },
    // { word: 'judge', translation: 'hakim' },
    // { word: 'janitor', translation: 'petugas kebersihan' },
    // { word: 'jeweler', translation: 'tukang perhiasan' },
    // { word: 'jockey', translation: 'joki' },
    // { word: 'justice', translation: 'mahkamah agung' },
    // { word: 'king', translation: 'raja' },
    // { word: 'knight', translation: 'ksatria' },
    // { word: 'kid', translation: 'anak kecil' },
    // { word: 'kindergarten teacher', translation: 'guru tk' },
    // { word: 'kite maker', translation: 'pembuat layang-layang' },
    // { word: 'keymaker', translation: 'pembuat kunci' },
    // { word: 'lawyer', translation: 'pengacara' },
    // { word: 'librarian', translation: 'pustakawan' },
    // { word: 'lifeguard', translation: 'penjaga pantai' },
    // { word: 'lecturer', translation: 'dosen' },
    // { word: 'laborer', translation: 'pekerja keras' },
    // { word: 'leader', translation: 'pemimpin' },
    // { word: 'musician', translation: 'musisi' },
    // { word: 'mechanic', translation: 'mekanik' },
    // { word: 'manager', translation: 'manajer' },
    // { word: 'magician', translation: 'pesulap' },
    // { word: 'miner', translation: 'penambang' },
    // { word: 'mathematician', translation: 'ahli matematika' },
    // { word: 'nurse', translation: 'perawat' },
    // { word: 'nun', translation: 'biarawati' },
    // { word: 'navigator', translation: 'navigator' },
    // { word: 'nutritionist', translation: 'ahli gizi' },
    // { word: 'neighbor', translation: 'tetangga' },
    // { word: 'negotiator', translation: 'negosiator' },
    // { word: 'officer', translation: 'karyawan' },
    // { word: 'optician', translation: 'ahli kacamata' },
    // { word: 'organizer', translation: 'penyelenggara' },
    // { word: 'observer', translation: 'pengamat' },
    // { word: 'operator', translation: 'operator' },
    // { word: 'orphan', translation: 'anak yatim' },
    // { word: 'pilot', translation: 'pilot' },
    // { word: 'photographer', translation: 'fotografer' },
    // { word: 'painter', translation: 'pelukis' },
    // { word: 'police', translation: 'polisi' },
    // { word: 'plumber', translation: 'tukang ledeng' },
    // { word: 'politician', translation: 'politikus' },
    // { word: 'queen', translation: 'ratu' },
    // { word: 'quilter', translation: 'pembuat selimut' },
    // { word: 'quizmaster', translation: 'pembawa kuis' },
    // { word: 'quartermaster', translation: 'perwira perbekalan' },

    // // Indonesian → English
    // { word: 'penerjemah lisan', translation: 'interpreter' },
    // { word: 'ilustrator', translation: 'illustrator' },
    // { word: 'penyelidik', translation: 'investigator' },
    // { word: 'jurnalis', translation: 'journalist' },
    // { word: 'hakim', translation: 'judge' },
    // { word: 'petugas kebersihan', translation: 'janitor' },
    // { word: 'tukang perhiasan', translation: 'jeweler' },
    // { word: 'joki', translation: 'jockey' },
    // { word: 'mahkamah agung', translation: 'justice' },
    // { word: 'raja', translation: 'king' },
    // { word: 'ksatria', translation: 'knight' },
    // { word: 'anak kecil', translation: 'kid' },
    // { word: 'guru tk', translation: 'kindergarten teacher' },
    // { word: 'pembuat layang-layang', translation: 'kite maker' },
    // { word: 'pembuat kunci', translation: 'keymaker' },
    // { word: 'pengacara', translation: 'lawyer' },
    // { word: 'pustakawan', translation: 'librarian' },
    // { word: 'penjaga pantai', translation: 'lifeguard' },
    // { word: 'dosen', translation: 'lecturer' },
    // { word: 'pekerja keras', translation: 'laborer' },
    // { word: 'pemimpin', translation: 'leader' },
    // { word: 'musisi', translation: 'musician' },
    // { word: 'mekanik', translation: 'mechanic' },
    // { word: 'manajer', translation: 'manager' },
    // { word: 'pesulap', translation: 'magician' },
    // { word: 'penambang', translation: 'miner' },
    // { word: 'ahli matematika', translation: 'mathematician' },
    // { word: 'perawat', translation: 'nurse' },
    // { word: 'biarawati', translation: 'nun' },
    // { word: 'ahli gizi', translation: 'nutritionist' },
    // { word: 'tetangga', translation: 'neighbor' },
    // { word: 'negosiator', translation: 'negotiator' },
    // { word: 'karyawan', translation: 'officer' },
    // { word: 'ahli kacamata', translation: 'optician' },
    // { word: 'penyelenggara', translation: 'organizer' },
    // { word: 'pengamat', translation: 'observer' },
    // { word: 'anak yatim', translation: 'orphan' },
    // { word: 'fotografer', translation: 'photographer' },
    // { word: 'pelukis', translation: 'painter' },
    // { word: 'polisi', translation: 'police' },
    // { word: 'tukang ledeng', translation: 'plumber' },
    // { word: 'politikus', translation: 'politician' },
    // { word: 'ratu', translation: 'queen' },
    // { word: 'pembuat selimut', translation: 'quilter' },
    // { word: 'pembawa kuis', translation: 'quizmaster' },
    // { word: 'perwira perbekalan', translation: 'quartermaster' },

    // // Bagian 3
    // // English → Indonesian
    // { word: 'quack', translation: 'tabib palsu' },
    // { word: 'quester', translation: 'pencari' },
    // { word: 'racer', translation: 'pembalap' },
    // { word: 'reporter', translation: 'reporter' },
    // { word: 'researcher', translation: 'peneliti' },
    // { word: 'rancher', translation: 'peternak' },
    // { word: 'receptionist', translation: 'resepsionis' },
    // { word: 'rider', translation: 'pengendara' },
    // { word: 'scientist', translation: 'ilmuwan' },
    // { word: 'singer', translation: 'penyanyi' },
    // { word: 'soldier', translation: 'prajurit' },
    // { word: 'student', translation: 'siswa' },
    // { word: 'surgeon', translation: 'ahli bedah' },
    // { word: 'salesperson', translation: 'penjual' },
    // { word: 'teacher', translation: 'guru' },
    // { word: 'technician', translation: 'teknisi' },
    // { word: 'tailor', translation: 'penjahit' },
    // { word: 'translator', translation: 'penerjemah' },
    // { word: 'truck driver', translation: 'supir truk' },
    // { word: 'therapist', translation: 'terapis' },
    // { word: 'uber driver', translation: 'supir uber' },
    // { word: 'usher', translation: 'petugas penyambut tamu' },
    // { word: 'undertaker', translation: 'pengurus jenazah' },
    // { word: 'unionist', translation: 'serikat pekerja' },
    // { word: 'urban planner', translation: 'perencana kota' },
    // { word: 'underwriter', translation: 'penjamin asuransi' },
    // { word: 'veterinarian', translation: 'dokter hewan' },
    // { word: 'volunteer', translation: 'relawan' },
    // { word: 'violinist', translation: 'pemain biola' },
    // { word: 'vendor', translation: 'penyedia barang' },
    // { word: 'vocalist', translation: 'vokalis' },
    // { word: 'vicar', translation: 'pendeta' },
    // { word: 'writer', translation: 'penulis' },
    // { word: 'waiter', translation: 'pelayan' },
    // { word: 'welder', translation: 'tukang las' },
    // { word: 'worker', translation: 'pekerja' },
    // { word: 'watchmaker', translation: 'pembuat jam' },
    // { word: 'warden', translation: 'sipir' },
    // { word: 'xylophonist', translation: 'pemain xylophone' },
    // { word: 'xenobiologist', translation: 'ahli biologi eksoplanet' },
    // { word: 'x-ray technician', translation: 'teknisi sinar-x' },
    // { word: 'xenologist', translation: 'ahli makhluk asing' },
    // { word: 'xerox operator', translation: 'operator mesin fotokopi' },
    // { word: 'yachtsman', translation: 'pelaut yacht' },
    // { word: 'yogi', translation: 'praktisi yoga' },
    // { word: 'yeoman', translation: 'peladang' },
    // { word: 'youth worker', translation: 'pekerja pemuda' },

    // // Indonesian → English
    // { word: 'tabib palsu', translation: 'quack' },
    // { word: 'pencari', translation: 'quester' },
    // { word: 'pembalap', translation: 'racer' },
    // { word: 'peneliti', translation: 'researcher' },
    // { word: 'peternak', translation: 'rancher' },
    // { word: 'resepsionis', translation: 'receptionist' },
    // { word: 'pengendara', translation: 'rider' },
    // { word: 'ilmuwan', translation: 'scientist' },
    // { word: 'penyanyi', translation: 'singer' },
    // { word: 'prajurit', translation: 'soldier' },
    // { word: 'siswa', translation: 'student' },
    // { word: 'ahli bedah', translation: 'surgeon' },
    // { word: 'penjual', translation: 'salesperson' },
    // { word: 'guru', translation: 'teacher' },
    // { word: 'teknisi', translation: 'technician' },
    // { word: 'penjahit', translation: 'tailor' },
    // { word: 'penerjemah', translation: 'translator' },
    // { word: 'supir truk', translation: 'truck driver' },
    // { word: 'terapis', translation: 'therapist' },
    // { word: 'supir uber', translation: 'uber driver' },
    // { word: 'petugas penyambut tamu', translation: 'usher' },
    // { word: 'pengurus jenazah', translation: 'undertaker' },
    // { word: 'serikat pekerja', translation: 'unionist' },
    // { word: 'perencana kota', translation: 'urban planner' },
    // { word: 'penjamin asuransi', translation: 'underwriter' },
    // { word: 'dokter hewan', translation: 'veterinarian' },
    // { word: 'relawan', translation: 'volunteer' },
    // { word: 'pemain biola', translation: 'violinist' },
    // { word: 'penyedia barang', translation: 'vendor' },
    // { word: 'vokalis', translation: 'vocalist' },
    // { word: 'pendeta', translation: 'vicar' },
    // { word: 'penulis', translation: 'writer' },
    // { word: 'pelayan', translation: 'waiter' },
    // { word: 'tukang las', translation: 'welder' },
    // { word: 'pekerja', translation: 'worker' },
    // { word: 'pembuat jam', translation: 'watchmaker' },
    // { word: 'sipir', translation: 'warden' },
    // { word: 'pemain xylophone', translation: 'xylophonist' },
    // { word: 'ahli biologi eksoplanet', translation: 'xenobiologist' },
    // { word: 'teknisi sinar-x', translation: 'x-ray technician' },
    // { word: 'ahli makhluk asing', translation: 'xenologist' },
    // { word: 'operator mesin fotokopi', translation: 'xerox operator' },
    // { word: 'pelaut yacht', translation: 'yachtsman' },
    // { word: 'praktisi yoga', translation: 'yogi' },
    // { word: 'peladang', translation: 'yeoman' },
    // { word: 'pekerja pemuda', translation: 'youth worker' },

    // // Bagian 4
    // // English → Indonesian
    // { word: 'youth counselor', translation: 'konselor pemuda' },
    // { word: 'zookeeper', translation: 'penjaga kebun binatang' },
    // { word: 'zoologist', translation: 'ahli zoologi' },
    // { word: 'zen master', translation: 'guru zen' },
    // { word: 'zither player', translation: 'pemain sitar' },
    // { word: 'boy', translation: 'anak laki-laki' },
    // { word: 'girl', translation: 'anak perempuan' },
    // { word: 'man', translation: 'pria' },
    // { word: 'woman', translation: 'wanita' },
    // { word: 'child', translation: 'anak' },
    // { word: 'teenager', translation: 'remaja' },
    // { word: 'adult', translation: 'dewasa' },
    // { word: 'friend', translation: 'teman' },
    // { word: 'baby', translation: 'bayi' },
    // { word: 'mother', translation: 'ibu' },
    // { word: 'father', translation: 'ayah' },
    // { word: 'brother', translation: 'saudara laki-laki' },
    // { word: 'sister', translation: 'saudara perempuan' },
    // { word: 'son', translation: 'anak laki-laki (keluarga)' },
    // { word: 'daughter', translation: 'anak perempuan (keluarga)' },
    // { word: 'grandfather', translation: 'kakek' },
    // { word: 'grandmother', translation: 'nenek' },
    // { word: 'uncle', translation: 'paman' },
    // { word: 'aunt', translation: 'bibi' },
    // { word: 'apple', translation: 'apel' },
    // { word: 'animal', translation: 'hewan' },
    // { word: 'alligator', translation: 'buaya' },
    // { word: 'book', translation: 'buku' },
    // { word: 'ball', translation: 'bola' },
    // { word: 'bird', translation: 'burung' },
    // { word: 'cat', translation: 'kucing' },
    // { word: 'car', translation: 'mobil' },
    // { word: 'computer', translation: 'komputer' },
    // { word: 'dog', translation: 'anjing' },
    // { word: 'door', translation: 'pintu' },
    // { word: 'duck', translation: 'bebek' },
    // { word: 'elephant', translation: 'gajah' },
    // { word: 'egg', translation: 'telur' },
    // { word: 'engine', translation: 'mesin' },
    // { word: 'fish', translation: 'ikan' },
    // { word: 'flower', translation: 'bunga' },
    // { word: 'fan', translation: 'kipas' },
    // { word: 'giraffe', translation: 'jerapah' }, // 🛠️ Fix typo from 'graffe'
    // { word: 'grapes', translation: 'anggur' },
    // { word: 'glasses', translation: 'kacamata' },
    // { word: 'hat', translation: 'topi' },
    // { word: 'house', translation: 'rumah' },
    // { word: 'horse', translation: 'kuda' },

    // // Indonesian → English
    // { word: 'konselor pemuda', translation: 'youth counselor' },
    // { word: 'penjaga kebun binatang', translation: 'zookeeper' },
    // { word: 'ahli zoologi', translation: 'zoologist' },
    // { word: 'guru zen', translation: 'zen master' },
    // { word: 'pemain sitar', translation: 'zither player' },
    // { word: 'anak laki-laki', translation: 'boy' },
    // { word: 'anak perempuan', translation: 'girl' },
    // { word: 'pria', translation: 'man' },
    // { word: 'wanita', translation: 'woman' },
    // { word: 'anak', translation: 'child' },
    // { word: 'remaja', translation: 'teenager' },
    // { word: 'dewasa', translation: 'adult' },
    // { word: 'teman', translation: 'friend' },
    // { word: 'bayi', translation: 'baby' },
    // { word: 'ibu', translation: 'mother' },
    // { word: 'ayah', translation: 'father' },
    // { word: 'saudara laki-laki', translation: 'brother' },
    // { word: 'saudara perempuan', translation: 'sister' },
    // { word: 'anak laki-laki (keluarga)', translation: 'son' },
    // { word: 'anak perempuan (keluarga)', translation: 'daughter' },
    // { word: 'kakek', translation: 'grandfather' },
    // { word: 'nenek', translation: 'grandmother' },
    // { word: 'paman', translation: 'uncle' },
    // { word: 'bibi', translation: 'aunt' },
    // { word: 'apel', translation: 'apple' },
    // { word: 'hewan', translation: 'animal' },
    // { word: 'buaya', translation: 'alligator' },
    // { word: 'buku', translation: 'book' },
    // { word: 'bola', translation: 'ball' },
    // { word: 'burung', translation: 'bird' },
    // { word: 'kucing', translation: 'cat' },
    // { word: 'mobil', translation: 'car' },
    // { word: 'komputer', translation: 'computer' },
    // { word: 'anjing', translation: 'dog' },
    // { word: 'pintu', translation: 'door' },
    // { word: 'bebek', translation: 'duck' },
    // { word: 'gajah', translation: 'elephant' },
    // { word: 'telur', translation: 'egg' },
    // { word: 'mesin', translation: 'engine' },
    // { word: 'ikan', translation: 'fish' },
    // { word: 'bunga', translation: 'flower' },
    // { word: 'kipas', translation: 'fan' },
    // { word: 'jerapah', translation: 'giraffe' }, // 🛠️ Fix typo dari 'graffe'
    // { word: 'anggur', translation: 'grapes' },
    // { word: 'kacamata', translation: 'glasses' },
    // { word: 'topi', translation: 'hat' },
    // { word: 'rumah', translation: 'house' },
    // { word: 'kuda', translation: 'horse' },

    // // Bagian 5
    // // English → Indonesian
    // { word: 'ice cream', translation: 'es krim' },
    // { word: 'island', translation: 'pulau' },
    // { word: 'insect', translation: 'serangga' },
    // { word: 'juice', translation: 'jus' },
    // { word: 'jam', translation: 'selai' },
    // { word: 'jacket', translation: 'jaket' },
    // { word: 'arc', translation: 'busur' },
    // { word: 'circle', translation: 'lingkaran' },
    // { word: 'cube', translation: 'kubus' },
    // { word: 'cylinder', translation: 'silinder' },
    // { word: 'decagon', translation: 'segi sepuluh' },
    // { word: 'diamond', translation: 'belah ketupat' },
    // { word: 'dodecagon', translation: 'segi dua belas' },
    // { word: 'ellipse', translation: 'elips' },
    // { word: 'frustum', translation: 'kerucut terpancung' },
    // { word: 'heart', translation: 'hati' },
    // { word: 'heptagon', translation: 'segi tujuh' },
    // { word: 'hexagon', translation: 'segi enam' },
    // { word: 'line', translation: 'garis' },
    // { word: 'nonagon', translation: 'segi sembilan' },
    // { word: 'octagon', translation: 'segi delapan' },
    // { word: 'oval', translation: 'oval' },
    // { word: 'parallelogram', translation: 'jajar genjang' },
    // { word: 'pentagon', translation: 'segi lima' },
    // { word: 'pyramid', translation: 'piramida' },
    // { word: 'rectangle', translation: 'persegi panjang' },
    // { word: 'rhombus', translation: 'belah ketupat (geometri)' },
    // { word: 'semi-circle', translation: 'setengah lingkaran' },
    // { word: 'sphere', translation: 'bola (teoritis)' },
    // { word: 'square', translation: 'persegi' },
    // { word: 'tetrahedron', translation: 'tetrahedron' },
    // { word: 'triangle', translation: 'segitiga' },
    // { word: 'trapezoid', translation: 'trapesium' },
    // { word: 'zigzag', translation: 'zigzag' },
    // { word: 'kite', translation: 'layang-layang' },
    // { word: 'key', translation: 'kunci' },
    // { word: 'koala', translation: 'koala' },
    // { word: 'lion', translation: 'singa' },
    // { word: 'laptop', translation: 'laptop' },
    // { word: 'lemon', translation: 'lemon' },
    // { word: 'monkey', translation: 'monyet' },
    // { word: 'mouse', translation: 'tikus' },
    // { word: 'milk', translation: 'susu' },
    // { word: 'notebook', translation: 'buku catatan' },
    // { word: 'nut', translation: 'kacang' },
    // { word: 'orange', translation: 'jeruk' },
    // { word: 'owl', translation: 'burung hantu' },
    // { word: 'onion', translation: 'bawang' },
    // { word: 'penguin', translation: 'penguin' },
    // { word: 'pencil', translation: 'pensil' },
    // { word: 'pizza', translation: 'pizza' },
    // { word: 'quilt', translation: 'selimut' },
    // { word: 'question', translation: 'pertanyaan' },
    // { word: 'rabbit', translation: 'kelinci' },
    // { word: 'ring', translation: 'cincin' },
    // { word: 'rocket', translation: 'roket' },
    // { word: 'sun', translation: 'matahari' },
    // { word: 'star', translation: 'bintang' },
    // { word: 'snake', translation: 'ular' },
    // { word: 'tiger', translation: 'harimau' },
    // { word: 'table', translation: 'meja' },
    // { word: 'tree', translation: 'pohon' },
    // { word: 'umbrella', translation: 'payung' },
    // { word: 'uniform', translation: 'seragam' },
    // { word: 'unicorn', translation: 'unicorn' },
    // { word: 'violin', translation: 'biola' },
    // { word: 'vegetable', translation: 'sayuran' },
    // { word: 'vase', translation: 'vas' },

    // // Indonesian → English
    // { word: 'es krim', translation: 'ice cream' },
    // { word: 'pulau', translation: 'island' },
    // { word: 'serangga', translation: 'insect' },
    // { word: 'jus', translation: 'juice' },
    // { word: 'selai', translation: 'jam' },
    // { word: 'jaket', translation: 'jacket' },
    // { word: 'busur', translation: 'arc' },
    // { word: 'lingkaran', translation: 'circle' },
    // { word: 'kubus', translation: 'cube' },
    // { word: 'silinder', translation: 'cylinder' },
    // { word: 'segi sepuluh', translation: 'decagon' },
    // { word: 'belah ketupat', translation: 'diamond' },
    // { word: 'segi dua belas', translation: 'dodecagon' },
    // { word: 'elips', translation: 'ellipse' },
    // { word: 'kerucut terpancung', translation: 'frustum' },
    // { word: 'hati', translation: 'heart' },
    // { word: 'segi tujuh', translation: 'heptagon' },
    // { word: 'segi enam', translation: 'hexagon' },
    // { word: 'garis', translation: 'line' },
    // { word: 'segi sembilan', translation: 'nonagon' },
    // { word: 'segi delapan', translation: 'octagon' },
    // { word: 'jajar genjang', translation: 'parallelogram' },
    // { word: 'segi lima', translation: 'pentagon' },
    // { word: 'piramida', translation: 'pyramid' },
    // { word: 'persegi panjang', translation: 'rectangle' },
    // { word: 'belah ketupat (geometri)', translation: 'rhombus' },
    // { word: 'setengah lingkaran', translation: 'semi-circle' },
    // { word: 'bola (teoritis)', translation: 'sphere' },
    // { word: 'persegi', translation: 'square' },
    // { word: 'segitiga', translation: 'triangle' },
    // { word: 'trapesium', translation: 'trapezoid' },
    // { word: 'layang-layang', translation: 'kite' },
    // { word: 'kunci', translation: 'key' },
    // { word: 'singa', translation: 'lion' },
    // { word: 'monyet', translation: 'monkey' },
    // { word: 'tikus', translation: 'mouse' },
    // { word: 'susu', translation: 'milk' },
    // { word: 'buku catatan', translation: 'notebook' },
    // { word: 'kacang', translation: 'nut' },
    // { word: 'jeruk', translation: 'orange' },
    // { word: 'burung hantu', translation: 'owl' },
    // { word: 'bawang', translation: 'onion' },
    // { word: 'pensil', translation: 'pencil' },
    // { word: 'selimut', translation: 'quilt' },
    // { word: 'pertanyaan', translation: 'question' },
    // { word: 'kelinci', translation: 'rabbit' },
    // { word: 'cincin', translation: 'ring' },
    // { word: 'roket', translation: 'rocket' },
    // { word: 'matahari', translation: 'sun' },
    // { word: 'bintang', translation: 'star' },
    // { word: 'ular', translation: 'snake' },
    // { word: 'harimau', translation: 'tiger' },
    // { word: 'meja', translation: 'table' },
    // { word: 'pohon', translation: 'tree' },
    // { word: 'payung', translation: 'umbrella' },
    // { word: 'seragam', translation: 'uniform' },
    // { word: 'biola', translation: 'violin' },
    // { word: 'sayuran', translation: 'vegetable' },
    // { word: 'vas', translation: 'vase' },

    // // Bagian 6
    // // English → Indonesian
    // { word: 'pronoun', translation: 'kata ganti' },
    // { word: 'noun', translation: 'kata benda' },
    // { word: 'noun phrase', translation: 'frasa kata benda' },
    // { word: 'verb', translation: 'kata kerja' },
    // { word: 'verb phrase', translation: 'frasa kata kerja' },
    // { word: 'adjective', translation: 'kata sifat' },
    // { word: 'adverb', translation: 'kata keterangan' },
    // { word: 'preposition', translation: 'kata depan' },
    // { word: 'conjunction', translation: 'kata sambung' },
    // { word: 'interjection', translation: 'kata seru' },
    // { word: 'article', translation: 'artikel' },
    // { word: 'subject', translation: 'subjek' },
    // { word: 'object', translation: 'objek' },
    // { word: 'predicate', translation: 'predikat' },
    // { word: 'clause', translation: 'klausa' },
    // { word: 'phrase', translation: 'frasa' },
    // { word: 'sentence', translation: 'kalimat' },
    // { word: 'paragraph', translation: 'paragraf' },
    // { word: 'text', translation: 'teks' },
    // { word: 'grammar', translation: 'tata bahasa' },
    // { word: 'spelling', translation: 'ejaan' },
    // { word: 'punctuation', translation: 'tanda baca' },
    // { word: 'capitalization', translation: 'kapitalisasi' },
    // { word: 'tense', translation: 'waktu' },
    // { word: 'present tense', translation: 'waktu sekarang' },
    // { word: 'past tense', translation: 'waktu lampau' },
    // { word: 'future tense', translation: 'waktu depan' },
    // { word: 'simple present tense', translation: 'waktu sekarang sederhana' },
    // { word: 'simple past tense', translation: 'waktu lampau sederhana' },
    // { word: 'simple future tense', translation: 'waktu depan sederhana' },
    // { word: 'present continuous tense', translation: 'waktu sekarang berkelanjutan' },
    // { word: 'past continuous tense', translation: 'waktu lampau berkelanjutan' },

    // // Indonesian → English
    // { word: 'kata ganti', translation: 'pronoun' },
    // { word: 'kata benda', translation: 'noun' },
    // { word: 'frasa kata benda', translation: 'noun phrase' },
    // { word: 'kata kerja', translation: 'verb' },
    // { word: 'frasa kata kerja', translation: 'verb phrase' },
    // { word: 'kata sifat', translation: 'adjective' },
    // { word: 'kata keterangan', translation: 'adverb' },
    // { word: 'kata depan', translation: 'preposition' },
    // { word: 'kata sambung', translation: 'conjunction' },
    // { word: 'kata seru', translation: 'interjection' },
    // { word: 'artikel', translation: 'article' },
    // { word: 'subjek', translation: 'subject' },
    // { word: 'objek', translation: 'object' },
    // { word: 'predikat', translation: 'predicate' },
    // { word: 'klausa', translation: 'clause' },
    // { word: 'frasa', translation: 'phrase' },
    // { word: 'kalimat', translation: 'sentence' },
    // { word: 'paragraf', translation: 'paragraph' },
    // { word: 'teks', translation: 'text' },
    // { word: 'tata bahasa', translation: 'grammar' },
    // { word: 'ejaan', translation: 'spelling' },
    // { word: 'tanda baca', translation: 'punctuation' },
    // { word: 'kapitalisasi', translation: 'capitalization' },
    // { word: 'waktu', translation: 'tense' },
    // { word: 'waktu sekarang', translation: 'present tense' },
    // { word: 'waktu lampau', translation: 'past tense' },
    // { word: 'waktu depan', translation: 'future tense' },
    // { word: 'waktu sekarang sederhana', translation: 'simple present tense' },
    // { word: 'waktu lampau sederhana', translation: 'simple past tense' },
    // { word: 'waktu depan sederhana', translation: 'simple future tense' },
    // { word: 'waktu sekarang berkelanjutan', translation: 'present continuous tense' },
    // { word: 'waktu lampau berkelanjutan', translation: 'past continuous tense' },


    // // Bagian 7
    // // English → Indonesian
    // { word: 'future continuous tense', translation: 'waktu depan berkelanjutan' },
    // { word: 'present perfect tense', translation: 'waktu sekarang sempurna' },
    // { word: 'past perfect tense', translation: 'waktu lampau sempurna' },
    // { word: 'future perfect tense', translation: 'waktu depan sempurna' },
    // { word: 'present perfect continuous tense', translation: 'waktu sekarang sempurna berkelanjutan' },
    // { word: 'past perfect continuous tense', translation: 'waktu lampau sempurna berkelanjutan' },
    // { word: 'future perfect continuous tense', translation: 'waktu depan sempurna berkelanjutan' },
    // { word: 'active voice', translation: 'suara aktif' },
    // { word: 'passive voice', translation: 'suara pasif' },
    // { word: 'subject-verb agreement', translation: 'kesesuaian subjek-kata kerja' },
    // { word: 'direct speech', translation: 'ucapan langsung' },
    // { word: 'indirect speech', translation: 'ucapan tidak langsung' },
    // { word: 'reported speech', translation: 'ucapan dilaporkan' },
    // { word: 'question tag', translation: 'tag pertanyaan' },
    // { word: 'conditional sentence', translation: 'kalimat bersyarat' },
    // { word: 'if clause', translation: 'klausa jika' },
    // { word: 'main clause', translation: 'klausa utama' },
    // { word: 'subordinate clause', translation: 'klausa bawahan' },
    // { word: 'relative clause', translation: 'klausa relatif' },
    // { word: 'adjective clause', translation: 'klausa sifat' },
    // { word: 'adverb clause', translation: 'klausa keterangan' },
    // { word: 'noun clause', translation: 'klausa benda' },
    // { word: 'gerund', translation: 'kata benda gerund' },
    // { word: 'infinitive', translation: 'kata kerja infinitif' },
    // { word: 'bare infinitive', translation: 'kata kerja infinitif telanjang' },
    // { word: 'split infinitive', translation: 'kata kerja infinitif terpisah' },
    // { word: 'bare form', translation: 'bentuk telanjang' },
    // { word: 'base form', translation: 'bentuk dasar' },
    // { word: 'past participle', translation: 'partisip masa lampau' },
    // { word: 'present participle', translation: 'partisip masa kini' },
    // { word: 'tobe', translation: 'menjadi' },
    // { word: 'have', translation: 'memiliki' },
    // { word: 'do', translation: 'melakukan' },
    // { word: 'will', translation: 'akan' },
    // { word: 'shall', translation: 'akan' },
    // { word: 'may', translation: 'boleh' },
    // { word: 'might', translation: 'mungkin' },
    // { word: 'must', translation: 'harus' },
    // { word: 'should', translation: 'seharusnya' },
    // { word: 'ought to', translation: 'seharusnya' },
    // { word: 'can', translation: 'bisa' },
    // { word: 'could', translation: 'bisa' },
    // { word: 'would', translation: 'akan' },

    // // Indonesian → English
    // { word: 'waktu depan berkelanjutan', translation: 'future continuous tense' },
    // { word: 'waktu sekarang sempurna', translation: 'present perfect tense' },
    // { word: 'waktu lampau sempurna', translation: 'past perfect tense' },
    // { word: 'waktu depan sempurna', translation: 'future perfect tense' },
    // { word: 'waktu sekarang sempurna berkelanjutan', translation: 'present perfect continuous tense' },
    // { word: 'waktu lampau sempurna berkelanjutan', translation: 'past perfect continuous tense' },
    // { word: 'waktu depan sempurna berkelanjutan', translation: 'future perfect continuous tense' },
    // { word: 'suara aktif', translation: 'active voice' },
    // { word: 'suara pasif', translation: 'passive voice' },
    // { word: 'kesesuaian subjek-kata kerja', translation: 'subject-verb agreement' },
    // { word: 'ucapan langsung', translation: 'direct speech' },
    // { word: 'ucapan tidak langsung', translation: 'indirect speech' },
    // { word: 'ucapan dilaporkan', translation: 'reported speech' },
    // { word: 'tag pertanyaan', translation: 'question tag' },
    // { word: 'kalimat bersyarat', translation: 'conditional sentence' },
    // { word: 'klausa jika', translation: 'if clause' },
    // { word: 'klausa utama', translation: 'main clause' },
    // { word: 'klausa bawahan', translation: 'subordinate clause' },
    // { word: 'klausa relatif', translation: 'relative clause' },
    // { word: 'klausa sifat', translation: 'adjective clause' },
    // { word: 'klausa keterangan', translation: 'adverb clause' },
    // { word: 'klausa benda', translation: 'noun clause' },
    // { word: 'kata benda gerund', translation: 'gerund' },
    // { word: 'kata kerja infinitif', translation: 'infinitive' },
    // { word: 'kata kerja infinitif telanjang', translation: 'bare infinitive' },
    // { word: 'kata kerja infinitif terpisah', translation: 'split infinitive' },
    // { word: 'bentuk telanjang', translation: 'bare form' },
    // { word: 'bentuk dasar', translation: 'base form' },
    // { word: 'partisip masa lampau', translation: 'past participle' },
    // { word: 'partisip masa kini', translation: 'present participle' },
    // { word: 'menjadi', translation: 'tobe' },
    // { word: 'memiliki', translation: 'have' },
    // { word: 'melakukan', translation: 'do' },
    // { word: 'akan', translation: 'will' },
    // { word: 'boleh', translation: 'may' },
    // { word: 'mungkin', translation: 'might' },
    // { word: 'harus', translation: 'must' },
    // { word: 'seharusnya', translation: 'should' },
    // { word: 'seharusnya', translation: 'ought to' },
    // { word: 'bisa', translation: 'can' },
    // { word: 'bisa', translation: 'could' },
    // { word: 'akan', translation: 'would' },

    // // Bagian 8
    // // English → Indonesian
    // { word: 'might', translation: 'mungkin' },
    // { word: 'may', translation: 'boleh' },
    // { word: 'can', translation: 'bisa' },
    // { word: 'could', translation: 'bisa (lampau)' },
    // { word: 'would', translation: 'akan (lampau)' },
    // { word: 'shall', translation: 'akan' },
    // { word: 'should', translation: 'seharusnya' },
    // { word: 'must', translation: 'harus' },

    // { word: 'complete', translation: 'lengkap' },
    // { word: 'incomplete', translation: 'tidak lengkap' },
    // { word: 'correct', translation: 'benar' },
    // { word: 'incorrect', translation: 'salah' },
    // { word: 'true', translation: 'benar (kebenaran)' },
    // { word: 'false', translation: 'salah (kebohongan)' },
    // { word: 'right', translation: 'benar (arah)' },
    // { word: 'wrong', translation: 'salah (arah)' },
    // { word: 'easy', translation: 'mudah' },
    // { word: 'difficult', translation: 'sulit' },
    // { word: 'hard', translation: 'keras' },
    // { word: 'soft', translation: 'lunak' },
    // { word: 'fast', translation: 'cepat' },
    // { word: 'slow', translation: 'lambat' },
    // { word: 'big', translation: 'besar' },
    // { word: 'small', translation: 'kecil' },
    // { word: 'long', translation: 'panjang' },
    // { word: 'short', translation: 'pendek' },

    // { word: 'quantifier', translation: 'kuantifier' },
    // { word: 'some', translation: 'beberapa' },
    // { word: 'any', translation: 'apakah ada' },
    // { word: 'much', translation: 'banyak (tidak terhitung)' },
    // { word: 'many', translation: 'banyak (terhitung)' },
    // { word: 'a lot of', translation: 'sejumlah besar' },
    // { word: 'a few', translation: 'beberapa (sedikit)' },
    // { word: 'few', translation: 'sedikit (hampir tidak ada)' },
    // { word: 'a little', translation: 'sedikit (untuk uncountable)' },
    // { word: 'little', translation: 'kecil (jumlah sangat sedikit)' },

    // // Indonesian → English
    // { word: 'mungkin', translation: 'might' },
    // { word: 'boleh', translation: 'may' },
    // { word: 'bisa', translation: 'can' },
    // { word: 'bisa (lampau)', translation: 'could' },
    // { word: 'akan (lampau)', translation: 'would' },
    // { word: 'akan', translation: 'shall' },
    // { word: 'seharusnya', translation: 'should' },
    // { word: 'harus', translation: 'must' },

    // { word: 'lengkap', translation: 'complete' },
    // { word: 'tidak lengkap', translation: 'incomplete' },
    // { word: 'benar', translation: 'correct' },
    // { word: 'salah', translation: 'incorrect' },
    // { word: 'benar (kebenaran)', translation: 'true' },
    // { word: 'salah (kebohongan)', translation: 'false' },
    // { word: 'benar (arah)', translation: 'right' },
    // { word: 'salah (arah)', translation: 'wrong' },
    // { word: 'mudah', translation: 'easy' },
    // { word: 'sulit', translation: 'difficult' },
    // { word: 'keras', translation: 'hard' },
    // { word: 'lunak', translation: 'soft' },
    // { word: 'cepat', translation: 'fast' },
    // { word: 'lambat', translation: 'slow' },
    // { word: 'besar', translation: 'big' },
    // { word: 'kecil', translation: 'small' },
    // { word: 'panjang', translation: 'long' },
    // { word: 'pendek', translation: 'short' },

    // { word: 'kuantifier', translation: 'quantifier' },
    // { word: 'beberapa', translation: 'some' },
    // { word: 'apakah ada', translation: 'any' },
    // { word: 'banyak (tidak terhitung)', translation: 'much' },
    // { word: 'banyak (terhitung)', translation: 'many' },
    // { word: 'sejumlah besar', translation: 'a lot of' },
    // { word: 'beberapa (sedikit)', translation: 'a few' },
    // { word: 'sedikit (hampir tidak ada)', translation: 'few' },
    // { word: 'sedikit (untuk uncountable)', translation: 'a little' },
    // { word: 'kecil (jumlah sangat sedikit)', translation: 'little' },

    // // Bagian 9
    // // English → Indonesian
    // { word: 'all', translation: 'semua' },
    // { word: 'both', translation: 'keduanya' },
    // { word: 'either', translation: 'salah satu' },
    // { word: 'neither', translation: 'tidak ada (keduanya)' },
    // { word: 'each', translation: 'setiap' },
    // { word: 'every', translation: 'setiap (semua)' },
    // { word: 'none', translation: 'tidak ada (semua)' },
    // { word: 'determiner', translation: 'penentu' },

    // { word: 'demonstrative pronoun', translation: 'kata ganti penunjuk' },
    // { word: 'this', translation: 'ini' },
    // { word: 'that', translation: 'itu' },
    // { word: 'these', translation: 'ini (jamak)' },
    // { word: 'those', translation: 'itu (jamak)' },

    // { word: 'possessive pronoun', translation: 'kata ganti kepemilikan' },
    // { word: 'my', translation: 'saya' },
    // { word: 'your', translation: 'kamu' },
    // { word: 'his', translation: 'dia (laki-laki)' },
    // { word: 'her', translation: 'dia (perempuan)' },
    // { word: 'its', translation: 'itu (benda)' },
    // { word: 'our', translation: 'kami' },
    // { word: 'their', translation: 'mereka' },

    // { word: 'reflexive pronoun', translation: 'kata ganti refleksif' },
    // { word: 'myself', translation: 'diri saya' },
    // { word: 'yourself', translation: 'diri kamu' },
    // { word: 'himself', translation: 'diri dia (laki-laki)' },
    // { word: 'herself', translation: 'diri dia (perempuan)' },
    // { word: 'itself', translation: 'diri itu (benda)' },
    // { word: 'ourselves', translation: 'diri kami' },
    // { word: 'themselves', translation: 'diri mereka' },

    // { word: 'indefinite pronoun', translation: 'kata ganti tak tentu' },
    // { word: 'somebody', translation: 'seseorang' },
    // { word: 'somebody else', translation: 'orang lain' },
    // { word: 'anybody', translation: 'siapa saja' },
    // { word: 'nobody', translation: 'tidak ada orang' },
    // { word: 'everybody', translation: 'semua orang' },
    // { word: 'everybody else', translation: 'semua orang lain' },

    // { word: 'a', translation: 'sebuah' },
    // { word: 'an', translation: 'sebuah (di depan huruf vokal)' },
    // { word: 'the', translation: 'yang' },

    // // Indonesian → English
    // { word: 'semua', translation: 'all' },
    // { word: 'keduanya', translation: 'both' },
    // { word: 'salah satu', translation: 'either' },
    // { word: 'tidak ada (keduanya)', translation: 'neither' },
    // { word: 'setiap', translation: 'each' },
    // { word: 'setiap (semua)', translation: 'every' },
    // { word: 'tidak ada (semua)', translation: 'none' },
    // { word: 'penentu', translation: 'determiner' },

    // { word: 'kata ganti penunjuk', translation: 'demonstrative pronoun' },
    // { word: 'ini', translation: 'this' },
    // { word: 'itu', translation: 'that' },
    // { word: 'ini (jamak)', translation: 'these' },
    // { word: 'itu (jamak)', translation: 'those' },

    // { word: 'kata ganti kepemilikan', translation: 'possessive pronoun' },
    // { word: 'saya', translation: 'my' },
    // { word: 'kamu', translation: 'your' },
    // { word: 'dia (laki-laki)', translation: 'his' },
    // { word: 'dia (perempuan)', translation: 'her' },
    // { word: 'itu (benda)', translation: 'its' },
    // { word: 'kami', translation: 'our' },
    // { word: 'mereka', translation: 'their' },

    // { word: 'kata ganti refleksif', translation: 'reflexive pronoun' },
    // { word: 'diri saya', translation: 'myself' },
    // { word: 'diri kamu', translation: 'yourself' },
    // { word: 'diri dia (laki-laki)', translation: 'himself' },
    // { word: 'diri dia (perempuan)', translation: 'herself' },
    // { word: 'diri itu (benda)', translation: 'itself' },
    // { word: 'diri kami', translation: 'ourselves' },
    // { word: 'diri mereka', translation: 'themselves' },

    // { word: 'kata ganti tak tentu', translation: 'indefinite pronoun' },
    // { word: 'seseorang', translation: 'somebody' },
    // { word: 'orang lain', translation: 'somebody else' },
    // { word: 'siapa saja', translation: 'anybody' },
    // { word: 'tidak ada orang', translation: 'nobody' },
    // { word: 'semua orang', translation: 'everybody' },
    // { word: 'semua orang lain', translation: 'everybody else' },

    // { word: 'sebuah', translation: 'a' },
    // { word: 'sebuah (di depan huruf vokal)', translation: 'an' },
    // { word: 'yang', translation: 'the' },
];

const motivasiList = [
    "Jangan menyerah, terus berlatih!",
    "Bagus! Kamu bisa lebih baik!",
    "Hebat! Kerja kerasmu membuahkan hasil!",
    "Semangat! Setiap kesalahan adalah pelajaran!",
    "Terus berusaha, kamu pasti bisa!",
];

let score = 0;
let mistakes = 0;
let usedWords = [];
let currentWord;
let timer;
const inputField = document.getElementById("input");
const wordDisplay = document.getElementById("word");
const notification = document.getElementById("notification");
const timerDisplay = document.getElementById("timer");
const motivasiDisplay = document.getElementById("motivasi");
const restartButton = document.getElementById("restart");
const scoreDisplay = document.getElementById("result");

function startGame() {
    if (usedWords.length === words.length) {
        finishGame();
        return;
    }

    do {
        currentWord = words[Math.floor(Math.random() * words.length)];
    } while (usedWords.includes(currentWord.word));

    usedWords.push(currentWord.word);
    wordDisplay.innerText = currentWord.word;
    inputField.value = "";
    inputField.disabled = false;
    notification.innerText = "";
    notification.classList.add("hidden");
    timerDisplay.innerText = 10;
    startTimer();
}

function startTimer() {
    let timeLeft = 30;
    timerDisplay.innerText = timeLeft;

    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            mistakes++;
            inputField.disabled = true;
            showNotification(`Waktu habis!`, 'wrong');
            checkGameOver();
            showRestartButton();
        }
    }, 1000);
}

function showNotification(message, type) {
    notification.innerText = message;
    notification.classList.remove("hidden", "correct", "wrong");
    notification.classList.add(type);
    setTimeout(() => {
        notification.classList.add("hidden");
        notification.classList.remove(type);
    }, 2000);
}

inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const userInput = inputField.value.trim().toLowerCase();
        // Cek jika input kosong atau mengandung angka
        if (userInput === "" || /\d/.test(userInput)) {
            showNotification("Input tidak boleh kosong atau angka.", 'wrong');
            return;
        }

        clearInterval(timer);
        if (userInput === currentWord.translation.toLowerCase()) {
            score++;
            showNotification("Jawaban benar!", 'correct');
        } else {
            mistakes++;
            showNotification(`Jawaban yang benar: ${currentWord.translation}`, 'wrong');
        }

        setTimeout(() => {
            if (usedWords.length < words.length) {
                startGame();
            } else {
                finishGame();
            }
        }, 2000);
    }
});

function checkGameOver() {
    if (mistakes >= 1) {
        clearInterval(timer);
        finishGame();
    }
}
// Menghapus histori dari inputan agar tidak muncul saran input sebelumnya
inputField.setAttribute("autocomplete", "off");

function finishGame() {
    clearInterval(timer);
    wordDisplay.classList.add("hidden");
    inputField.classList.add("hidden");
    timerDisplay.classList.add("hidden");
    notification.classList.add("hidden");
    inputField.disabled = true;

    // Tampilkan hasil akhir
    scoreDisplay.innerHTML = `
        <div class="result-content">
            <h3 class='done'>Selesai</h3>
            <p>Benar: <strong>${score}</strong></p>
            <p>Kesalahan: <strong>${mistakes} maksimal 25 ?</strong></p>
        </div>
    `;
    scoreDisplay.classList.remove("hidden");

    // Tampilkan kalimat motivasi secara acak
    const motivasi = motivasiList[Math.floor(Math.random() * motivasiList.length)];
    motivasiDisplay.innerHTML = `
        <div class="motivasi-content">${motivasi}</div>
    `;
    motivasiDisplay.classList.remove("hidden");
    motivasiDisplay.classList.add("show");

    // Tampilkan tombol ulang
    showRestartButton();
}

function showRestartButton() {
    restartButton.classList.remove("hidden");
    restartButton.innerText = "Ulangi!";
}

restartButton.addEventListener("click", () => {
    score = 0;
    mistakes = 0;
    usedWords = [];
    restartButton.classList.add("hidden");
    motivasiDisplay.classList.add("hidden");
    scoreDisplay.classList.add("hidden");
    wordDisplay.classList.remove("hidden");
    inputField.classList.remove("hidden");
    timerDisplay.classList.remove("hidden");
    startGame();
});

// Mulai permainan saat halaman dimuat
window.onload = startGame;

// Music
const music = new Audio();
music.src = 'music/relax-music.mp3';