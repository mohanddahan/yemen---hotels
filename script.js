// بيانات كاملة للمحافظات والمناطق اليمنية
const yemenData = {
    "أمانة العاصمة صنعاء": {
        regions: {
            "السبعين": { hotels: [] },
            "التعاون": { hotels: [] },
            "الوحدة": { hotels: [] },
            "معين": { hotels: [] },
            "القدس": { hotels: [] },
            "الثورة": { hotels: [] }
        }
    },
    "عدن": {
        regions: {
            "خور مكسر": { hotels: [] },
            "الشيخ عثمان": { hotels: [] },
            "كريتر": { hotels: [] },
            "المعلا": { hotels: [] },
            "المنصورة": { hotels: [] },
            "البريقة": { hotels: [] }
        }
    },
    "تعز": {
        regions: {
            "المدينة": { hotels: [] },
            "القاهرة": { hotels: [] },
            "المظفر": { hotels: [] },
            "صالة": { hotels: [] },
            "مشرة": { hotels: [] },
            "الروضة": { hotels: [] }
        }
    },
    "الحديدة": {
        regions: {
            "المراوعة": { hotels: [] },
            "باجل": { hotels: [] },
            "الزيدية": { hotels: [] },
            "التحيتا": { hotels: [] },
            "الجراحي": { hotels: [] }
        }
    },
    "حضرموت": {
        regions: {
            "المكلا": { hotels: [] },
            "الشحر": { hotels: [] },
            "سيئون": { hotels: [] },
            "تريم": { hotels: [] },
            "دوعن": { hotels: [] },
            "القطن": { hotels: [] }
        }
    },
    "إب": {
        regions: {
            "المركز": { hotels: [] },
            "الظهار": { hotels: [] },
            "السدة": { hotels: [] },
            "العدين": { hotels: [] },
            "فرع العدين": { hotels: [] }
        }
    },
    "ذمار": {
        regions: {
            "المركز": { hotels: [] },
            "عتام": { hotels: [] },
            "جهران": { hotels: [] },
            "مغرب عنس": { hotels: [] },
            "ضوران": { hotels: [] }
        }
    },
    "شبوة": {
        regions: {
            "عتق": { hotels: [] },
            "بيحان": { hotels: [] },
            "مرخة": { hotels: [] },
            "رصد": { hotels: [] },
            "عتق": { hotels: [] }
        }
    },
    "المهرة": {
        regions: {
            "الغيظة": { hotels: [] },
            "قشن": { hotels: [] },
            "حوف": { hotels: [] },
            "منعر": { hotels: [] }
        }
    },
    "الجوف": {
        regions: {
            "الحزم": { hotels: [] },
            "الخب والشعف": { hotels: [] },
            "برط العنان": { hotels: [] },
            "رطبة": { hotels: [] }
        }
    },
    "المحويت": {
        regions: {
            "المحويت": { hotels: [] },
            "الطويلة": { hotels: [] },
            "ملحان": { hotels: [] },
            "حفاش": { hotels: [] }
        }
    },
    "البيضاء": {
        regions: {
            "المركز": { hotels: [] },
            "الرياشية": { hotels: [] },
            "الصومعة": { hotels: [] },
            "ناطع": { hotels: [] }
        }
    },
    "صعدة": {
        regions: {
            "المركز": { hotels: [] },
            "قطابر": { hotels: [] },
            "حيدان": { hotels: [] },
            "سحار": { hotels: [] }
        }
    },
    "حجة": {
        regions: {
            "حجة": { hotels: [] },
            "كحلان": { hotels: [] },
            "المغرب": { hotels: [] },
            "شبام": { hotels: [] }
        }
    },
    "ريمة": {
        regions: {
            "الجبين": { hotels: [] },
            "بلاد الطعام": { hotels: [] },
            "مزهر": { hotels: [] },
            "السلفية": { hotels: [] }
        }
    },
    "أبين": {
        regions: {
            "زنجبار": { hotels: [] },
            "لودر": { hotels: [] },
            "خنفر": { hotels: [] },
            "رصد": { hotels: [] }
        }
    },
    "لحج": {
        regions: {
            "الحوطة": { hotels: [] },
            "تبن": { hotels: [] },
            "ردفان": { hotels: [] },
            "المضاربة": { hotels: [] }
        }
    },
    "مأرب": {
        regions: {
            "مأرب": { hotels: [] },
            "الجوبة": { hotels: [] },
            "بدبدة": { hotels: [] },
            "رحبة": { hotels: [] }
        }
    },
    "الضالع": {
        regions: {
            "الضالع": { hotels: [] },
            "جحاف": { hotels: [] },
            "الحشاء": { hotels: [] },
            "قبلة": { hotels: [] }
        }
    },
    "عمران": {
        regions: {
            "عمران": { hotels: [] },
            "خارف": { hotels: [] },
            "ثلا": { hotels: [] },
            "السود": { hotels: [] }
        }
    },
    "سقطرى": {
        regions: {
            "حديبو": { hotels: [] },
            "قلنسية": { hotels: [] },
            "عبد الكوري": { hotels: [] },
            "درسه": { hotels: [] }
        }
    }
};

// متغيرات النظام
let currentStep = 'step1';
let selected = {
    governorate: '',
    region: '',
    hotel: null,
    room: null
};

// تهيئة المحافظات
function init() {
    const container = document.getElementById('governorates');
    Object.keys(yemenData).forEach(gov => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${gov}</h3>
            <p>المناطق: ${Object.keys(yemenData[gov].regions).length}</p>
        `;
        card.onclick = () => selectGovernorate(gov);
        container.appendChild(card);
    });
}

function selectGovernorate(gov) {
    selected.governorate = gov;
    showStep('step2');
    
    const container = document.getElementById('regions');
    container.innerHTML = '';
    Object.keys(yemenData[gov].regions).forEach(region => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${region}</h3>
            <p>الفنادق: ${yemenData[gov].regions[region].hotels.length}</p>
        `;
        card.onclick = () => selectRegion(region);
        container.appendChild(card);
    });
}

function selectRegion(region) {
    selected.region = region;
    showStep('step3');
    
    const container = document.getElementById('hotels');
    container.innerHTML = '';
    yemenData[selected.governorate].regions[region].hotels.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-img">
            <h3>${hotel.name}</h3>
            <p>الغرف: ${hotel.rooms.length}</p>
        `;
        card.onclick = () => selectHotel(hotel);
        container.appendChild(card);
    });
}

function selectHotel(hotel) {
    selected.hotel = hotel;
    showStep('step4');
    
    const container = document.getElementById('rooms');
    container.innerHTML = '';
    hotel.rooms.forEach(room => {
        const card = document.createElement('div');
        card.className = 'room-card';
        card.innerHTML = `
            <h3>${room.type}</h3>
            <ul class="amenities">
                ${room.amenities.map(a => `<li>${a}</li>`).join('')}
            </ul>
            <p class="price">$${room.price} / ليلة</p>
            <p>السعة: ${room.capacity} أشخاص</p>
            <button onclick="selectRoom(${JSON.stringify(room).replace(/"/g, '&quot;')})">اختر هذه الغرفة</button>
        `;
        container.appendChild(card);
    });
}

function selectRoom(room) {
    selected.room = room;
    showStep('step5');
}

function showStep(step) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(step).classList.add('active');
    currentStep = step;
}

function navigation(target) {
    showStep(target);
}

// إدارة النموذج
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const bookingDetails = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        guests: formData.get('guests'),
        notes: formData.get('notes'),
        ...selected
    };
    
    alert(`تم الحجز بنجاح!\nسيصلك تأكيد على: ${bookingDetails.phone}`);
    showStep('step1');
});

// بدء التطبيق
window.onload = init;