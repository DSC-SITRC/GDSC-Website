const pop_join = document.getElementById('pop_join');

window.addEventListener('scroll', () => {
    console.log("window is scrolled...");
    let btn = document.getElementById("join_btn");
    // console.log(btn);
    let btn_rect = btn.getBoundingClientRect();
    // console.log(btn_rect);
    let bottom = btn_rect.bottom;
    let top = btn_rect.top;
    let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    // console.log(viewportHeight,top,bottom);

    // partial visible condition
    if (viewportHeight - top > 0 && bottom > 0) {
        console.log("join is partially visible");
        pop_join.classList.replace('show_flex', "hide");
    } else {
        pop_join.classList.replace('hide', 'show_flex');
    }

    // full visible condition
    if (bottom > 0 && bottom <= viewportHeight && top >= 0) {
        console.log("join is in the view");
    }
});

const team = [
    ['https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/aniket_singh_ZF9HAeE.jpeg', 'Aniket Singh', 'Team Lead'],

    ['https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/somesh_lad_VpWF5O6.jpg', 'Somesh Lad', 'Web Developer'],

    ['https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/pushkar_khadase_9rUJw7V.jpg', 'Pushkar Khadase', 'Cyber Security'],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/amit_sharma17_LYFuGqD.jpg', 'Amit Sharma', 'Machine Learning and DevOps'
    ],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/abhishek_sharma_3B9GgDN.jpg', 'Abhishek Sharma', 'Cloud Technology'
    ],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/pratik_pawar.jpg', 'Pratik Pawar', 'Android Developer'
    ],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/tanmay_vaidya_2w7GtU0.jpg', 'Tanmay Vaidya', 'Tech Volunteer'
    ], [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/ankit_tamboli_IPQCqAw.jpg', 'Ankit Tamboli', 'Web Developer Volunteer'
    ],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/sunidhi_jain_ER6YXHs.jpg', 'Sunidhi Jain', 'Marketing Volunteer'
    ],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/dhanshree_shimpi.jpg', 'Dhanshree Shimpi', 'Graphic Design Volunteer'
    ]
]
let html_to_be_added = ''
for (let index = 0; index < team.length; index++) {
    const member = team[index];
    let image_path = member[0];
    let name = member[1];
    let designation = member[2];
    let leader = '';
    if (designation === 'Team Lead') {
        leader = 'leader';
    }
    let member_code = `
<div class="member ${leader}">
<div class="photo">
    <img src="${image_path}"
        alt="team member photo" class="photo">
</div>
<div class="name">${name}

</div>
<div class="designation">${designation}</div>
</div>`
    html_to_be_added += member_code;
};

document.getElementsByClassName('team')[0].innerHTML += html_to_be_added;
