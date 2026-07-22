// Initialize Application & PWA Service Worker
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  renderTabContent('feed');
  registerPwaServiceWorker();
});

// PWA Service Worker Registration
let deferredPwaPrompt;
function registerPwaServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(() => {
      console.log('🚀 OmniVibe PWA Service Worker Registered!');
    }).catch(err => console.log('PWA Service Worker Error:', err));
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPwaPrompt = e;
    console.log('PWA Install Prompt Ready!');
  });
}

function promptInstallPwa() {
  if (deferredPwaPrompt) {
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then((res) => {
      if (res.outcome === 'accepted') {
        alert('🎉 OmniVibe ॲप तुमच्या होम स्क्रीनवर यशस्वीरीत्या इन्स्टॉल झाले आहे!');
      }
      deferredPwaPrompt = null;
    });
  } else {
    alert('📱 OmniVibe PWA तयार आहे! तुमच्या ब्राउझर मेनूमधून "Add to Home Screen" निवडू शकता.');
  }
}

let currentLang = 'mr';

// 100% Complete Multilingual Auto-Translation Dictionary (Marathi, Hindi, English)
const translations = {
  mr: {
    searchPlaceholder: "OmniVibe वर व्हिडिओ, नोकऱ्या, ट्रेंड शोधा...",
    installAppBtn: "ॲप इन्स्टॉल करा",
    loginBtn: "लॉगिन / रजिस्ट्रेशन",
    createBtn: "नवीन पोस्ट / MP4",
    navFeed: "Feed (सोशल & मीडिया)",
    navReels: "OmniReels (रील्स & शॉर्ट्स)",
    navWatch: "OmniWatch (व्हिडिओज & पॉडकास्ट)",
    navJobs: "OmniJobs (लिंक्डइन नोकऱ्या)",
    navThreads: "OmniThreads (ट्विटर/X पोल)",
    navAnalytics: "OmniAnalytics (क्रिएटर डॅशबोर्ड)",
    navMarket: "OmniMarket (खरेदी-विक्री)",
    navSaved: "Saved Vault (सेव्ह केलेल्या गोष्टी)",
    trendingTitle: "ट्रेंडिंग हॅशटॅग्स (#Trending)",
    trendingPosts: "पोस्ट्स",
    suggestedTitle: "सुचवलेले कनेक्शन्स (LinkedIn & IG)",
    connectBtn: "+ जोडा (Connect)",
    connectedBtn: "जोडले ✓",
    composerPlaceholder: "ज्ञानेश्वर, आज तुमच्या मनात काय चालले आहे? (व्हिडिओ, ब्लॉग लिहा...)",
    btnVideo: "📹 4K व्हिडिओ",
    btnPhoto: "🖼️ फोटो",
    btnBlog: "📝 ब्लॉग",
    btnPoll: "📊 पोल",
    btnLike: "आवडी (Likes)",
    btnComment: "कमेंट्स",
    btnRepost: "री-पोस्ट (Repost)",
    btnShare: "शेअर",
    safeBadge: "🛡️ AI सुरक्षित",
    audioTitle: "मराठी पॉडकास्ट #०४ — भविष्यातील टेक क्रांती",
    audioSub: "मराठी पॉडकास्ट हब • बॅकग्राउंड ऑडिओ",
    authTitle: "युझर रजिस्ट्रेशन / लॉगिन",
    authLoginTab: "लॉगिन (Sign In)",
    authOtpTab: "मोबाईल OTP",
    authSignupTab: "रजिस्ट्रेशन (Sign Up)",
    authSubmitBtn: "प्रवेश करा (Continue)"
  },
  hi: {
    searchPlaceholder: "OmniVibe पर वीडियो, नौकरियां, ट्रेंड खोजें...",
    installAppBtn: "ऐप इंस्टॉल करें",
    loginBtn: "लॉगिन / पंजीकरण",
    createBtn: "नई पोस्ट / MP4",
    navFeed: "फीड (सोशल और मीडिया)",
    navReels: "OmniReels (रील्स और शॉर्ट्स)",
    navWatch: "OmniWatch (वीडियो और पॉडकास्ट)",
    navJobs: "OmniJobs (नौकरियां और सीवी)",
    navThreads: "OmniThreads (ट्विटर/X पोल)",
    navAnalytics: "OmniAnalytics (क्रिएटर डैशबोर्ड)",
    navMarket: "OmniMarket (खरीद-बिक्री)",
    navSaved: "Saved Vault (सहेजी गई सामग्री)",
    trendingTitle: "ट्रेंडिंग हैशटैग (#Trending)",
    trendingPosts: "पोस्ट",
    suggestedTitle: "सुझाए गए कनेक्शन (LinkedIn & IG)",
    connectBtn: "+ जोड़ें (Connect)",
    connectedBtn: "जुड़ गए ✓",
    composerPlaceholder: "ज्ञानेश्वर, आज आपके मन में क्या चल रहा है? (वीडियो, ब्लॉग लिखें...)",
    btnVideo: "📹 4K वीडियो",
    btnPhoto: "🖼️ फोटो",
    btnBlog: "📝 ब्लॉग",
    btnPoll: "📊 पोल",
    btnLike: "पसंद (Likes)",
    btnComment: "टिप्पणियां",
    btnRepost: "री-पोस्ट (Repost)",
    btnShare: "शेयर करें",
    safeBadge: "🛡️ AI सुरक्षित",
    audioTitle: "हिंदी पॉडकास्ट #०४ — भविष्य की टेक क्रांति",
    audioSub: "हिंदी पॉडकास्ट हब • बैकग्राउंड ऑडियो",
    authTitle: "उपयोगकर्ता पंजीकरण / लॉगिन",
    authLoginTab: "लॉगिन (Sign In)",
    authOtpTab: "मोबाइल OTP",
    authSignupTab: "पंजीकरण (Sign Up)",
    authSubmitBtn: "आगे बढ़ें (Continue)"
  },
  en: {
    searchPlaceholder: "Search videos, jobs, trends on OmniVibe...",
    installAppBtn: "Install App",
    loginBtn: "Sign In / Register",
    createBtn: "Create Content / MP4",
    navFeed: "Feed (Social & Media)",
    navReels: "OmniReels (Shorts & Reels)",
    navWatch: "OmniWatch (Videos & Podcasts)",
    navJobs: "OmniJobs (LinkedIn Jobs)",
    navThreads: "OmniThreads (X / Threads)",
    navAnalytics: "OmniAnalytics (Creator Studio)",
    navMarket: "OmniMarket (Store)",
    navSaved: "Saved Vault (Bookmarks)",
    trendingTitle: "Trending Hashtags (#Trending)",
    trendingPosts: "posts",
    suggestedTitle: "Suggested Connections (LinkedIn & IG)",
    connectBtn: "+ Connect",
    connectedBtn: "Connected ✓",
    composerPlaceholder: "Dnyaneshwar, what is on your mind today? (Write video, blog...)",
    btnVideo: "📹 4K Video",
    btnPhoto: "🖼️ Photo",
    btnBlog: "📝 Blog",
    btnPoll: "📊 Poll",
    btnLike: "Likes",
    btnComment: "Comments",
    btnRepost: "Repost",
    btnShare: "Share",
    safeBadge: "🛡️ AI Safe",
    audioTitle: "Tech Podcast #04 — Future of AI Revolution",
    audioSub: "Podcast Hub • Playing Background Audio",
    authTitle: "User Registration / Login",
    authLoginTab: "Sign In",
    authOtpTab: "Mobile OTP",
    authSignupTab: "Sign Up",
    authSubmitBtn: "Continue"
  }
};

function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang] || translations['en'];
  
  // Top Bar elements
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;
  
  const lblLoginBtn = document.getElementById('lblLoginBtn');
  if (lblLoginBtn) lblLoginBtn.innerText = t.loginBtn;
  
  const lblCreateBtn = document.getElementById('lblCreateBtn');
  if (lblCreateBtn) lblCreateBtn.innerText = t.createBtn;

  // Sidebar Navigation Links
  const navBtns = document.querySelectorAll('.nav-btn span');
  if (navBtns.length >= 8) {
    navBtns[0].innerText = t.navFeed;
    navBtns[1].innerText = t.navReels;
    navBtns[2].innerText = t.navWatch;
    navBtns[3].innerText = t.navJobs;
    navBtns[4].innerText = t.navThreads;
    navBtns[5].innerText = t.navAnalytics;
    navBtns[6].innerText = t.navMarket;
    navBtns[7].innerText = t.navSaved;
  }

  // Right Sidebar Widgets
  const widgetTitles = document.querySelectorAll('.widget-title');
  if (widgetTitles.length >= 2) {
    widgetTitles[0].innerHTML = `<i data-lucide="trending-up" style="color:var(--accent-pink);"></i> ${t.trendingTitle}`;
    widgetTitles[1].innerHTML = `<i data-lucide="user-plus" style="color:var(--accent-cyan);"></i> ${t.suggestedTitle}`;
  }

  const followBtns = document.querySelectorAll('.btn-follow');
  followBtns.forEach(btn => {
    if (btn.innerText.includes('✓')) {
      btn.innerText = t.connectedBtn;
    } else {
      btn.innerText = t.connectBtn;
    }
  });

  // Re-render active view content
  renderTabContent(currentTab);
}



// Initial Mock Data
const state = {
  stories: [
    { id: 1, name: 'आपली स्टोरी', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', isAdd: true },
    { id: 2, name: 'अमित शर्मा', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&auto=format&fit=crop&q=80' },
    { id: 3, name: 'प्रिया पाटील', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', bg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=80' },
    { id: 4, name: 'टेक कट्टा', avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=80', bg: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&auto=format&fit=crop&q=80' },
    { id: 5, name: 'महाराष्ट्र न्यूझ', avatar: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=100&auto=format&fit=crop&q=80', bg: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=300&auto=format&fit=crop&q=80' }
  ],
  posts: [
    {
      id: 'p1',
      author: 'ज्ञानेश्वर टेक',
      username: '@dnyaneshwar_dev',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      time: '१० मिनिटांपूर्वी',
      tag: 'SuperApp MVP',
      text: '🚀 स्वागत आहे OmniVibe वर! आता एकाच ॲपमध्ये Reels, YouTube HD Videos, LinkedIn Professional Profile आणि Twitter/X ची मजा घ्या! तुमचा प्रतिसाद कसा वाटला नक्की सांगा.',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      likes: 124,
      isLiked: false,
      comments: ['अतिशय सुंदर डिझाईन!', 'खूप छान संकल्पना आहे.'],
      type: 'feed'
    },
    {
      id: 'p2',
      author: 'क्रिएटर हब (YouTube Channel)',
      username: '@creator_hub',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=80',
      time: '१ तासापूर्वी',
      tag: 'MP4 HD Video',
      text: '🎥 नवीन HD 4K व्हिडिओ पॉडकास्ट लाइव्ह झाला आहे! खालील व्हिडिओ प्ले करा आणि चॅनेल सबस्क्राईब करा.',
      mediaType: 'video',
      mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      likes: 489,
      isLiked: true,
      comments: ['4K क्वालिटी मस्त आहे', 'पुढील पॉडकास्ट कधी येणार?'],
      type: 'feed'
    }
  ],
  reels: [
    {
      id: 'r1',
      author: '@rohit_reels',
      title: 'मुंबई नाईट लाईव्ह वाइब्स ✨ #Shorts #Reels #OmniVibe',
      posterUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=80',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      likes: '45.2K',
      comments: '1,280',
      shares: '4.1K'
    },
    {
      id: 'r2',
      author: '@tech_marathi',
      title: 'AI कोडिंग टिप्स आणि ट्रिक्स २०२६ 💡 #Tech #Coding',
      posterUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      likes: '89.1K',
      comments: '3,410',
      shares: '12K'
    }
  ],

  jobs: [
    { id: 'j1', title: 'Senior React / Flutter Developer', company: 'OmniVibe Tech Pvt Ltd', location: 'पुणे / Remote', salary: '₹१५,००,००० - ₹२५,००,०००/वर्ष', type: 'Full-Time' },
    { id: 'j2', title: 'Video Content Creator & /* -------------------------------------------------------------
   1. FEED VIEW (Unified Social Feed + Stories + Insta/FB/YT/X Style)
----------------------------------------------------------------*/
function renderFeedView(container) {
  let html = `
    <!-- Stories Section -->
    <div class="stories-section">
  `;

  state.stories.forEach(story => {
    if (story.isAdd) {
      html += `
        <div class="story-card add-story" onclick="openComposer()">
          <div class="plus-icon">+</div>
          <span style="font-size:0.75rem; font-weight:700;">स्टोरी जोडा</span>
        </div>
      `;
    } else {
      html += `
        <div class="story-card" style="background-image: url('${story.bg}')">
          <img src="${story.avatar}" class="story-avatar">
          <div class="story-name">${story.name}</div>
        </div>
      `;
    }
  });

  html += `</div><!-- /Stories -->`;

  const t = translations[currentLang] || translations['en'];

  <!-- In-Feed Post Composer Box (Facebook Style "What's on your mind?") -->
  html += `
    <div class="card-glass" style="padding:16px; margin-bottom:24px;">
      <div style="display:flex; gap:12px; align-items:center; margin-bottom:12px;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" class="avatar" style="width:40px; height:40px;">
        <div onclick="openComposer()" style="flex:1; background:rgba(255,255,255,0.06); border:1px solid var(--glass-border); border-radius:var(--radius-full); padding:10px 18px; color:var(--text-muted); font-size:0.88rem; cursor:pointer;">
          ${t.composerPlaceholder}
        </div>
      </div>

      <div style="display:flex; justify-style:space-around; justify-content:space-around; padding-top:10px; border-top:1px solid rgba(255,255,255,0.05);">
        <button onclick="openComposer()" style="background:transparent; border:none; color:var(--accent-cyan); font-size:0.82rem; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:6px;">
          ${t.btnVideo}
        </button>
        <button onclick="openComposer()" style="background:transparent; border:none; color:var(--accent-pink); font-size:0.82rem; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:6px;">
          ${t.btnPhoto}
        </button>
        <button onclick="openComposer()" style="background:transparent; border:none; color:#fbbf24; font-size:0.82rem; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:6px;">
          ${t.btnBlog}
        </button>
        <button onclick="openComposer()" style="background:transparent; border:none; color:#10b981; font-size:0.82rem; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:6px;">
          ${t.btnPoll}
        </button>
      </div>
    </div>
  `;


  // Render Post Feed Cards
  state.posts.forEach((post) => {
    html += `
      <article class="card-glass" id="post-${post.id}">
        <div class="post-header">
          <div class="post-author">
            <img src="${post.avatar}" class="avatar">
            <div class="author-meta">
              <h4>
                ${post.author} 
                <i data-lucide="check-circle" class="badge-verified"></i>
                <span class="badge-tag">${post.tag}</span>
                <span class="badge-tag" style="background:rgba(16,185,129,0.15); color:#10b981;">🛡️ AI Safe</span>
              </h4>
              <p>${post.username} • ${post.time}</p>
            </div>
          </div>
          <div style="position:relative;">
            <button class="btn-icon" title="More Options (⁝)" onclick="togglePostOptions('${post.id}')">
              <i data-lucide="more-horizontal"></i>
            </button>
            <div id="postOptions-${post.id}" style="position:absolute; top:42px; right:0; background:#111625; border:1px solid var(--glass-border-glow); border-radius:var(--radius-md); padding:8px; width:160px; box-shadow:var(--shadow-glow); display:none; flex-direction:column; gap:4px; z-index:50;">
              <button onclick="savePost('${post.id}')" style="background:transparent; border:none; color:#fff; padding:6px 10px; font-size:0.8rem; text-align:left; cursor:pointer; display:flex; align-items:center; gap:8px;">📌 Save Post</button>
              <button onclick="notInterested('${post.id}')" style="background:transparent; border:none; color:var(--text-muted); padding:6px 10px; font-size:0.8rem; text-align:left; cursor:pointer; display:flex; align-items:center; gap:8px;">🚫 Not Interested</button>
              <button onclick="sharePost('${post.id}')" style="background:transparent; border:none; color:var(--accent-cyan); padding:6px 10px; font-size:0.8rem; text-align:left; cursor:pointer; display:flex; align-items:center; gap:8px;">🔗 Copy Link</button>
            </div>
          </div>
        </div>

        <p class="post-text">${post.text}</p>

        ${post.mediaUrl ? `
          <div class="post-media-box">
            ${post.mediaType === 'video' ? `
              <video src="${post.mediaUrl}" controls poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80" style="width:100%; border-radius: var(--radius-md);"></video>
            ` : `
              <img src="${post.mediaUrl}" alt="Post media">
            `}
          </div>
        ` : ''}

        <!-- Interaction Bar (Facebook/X/LinkedIn Hybrid) -->
        <div class="post-actions">
          <button class="action-btn ${post.isLiked ? 'liked' : ''}" onclick="toggleLike('${post.id}')">
            <i data-lucide="heart" fill="${post.isLiked ? 'currentColor' : 'none'}"></i>
            <span>${post.likes}</span>
          </button>
          <button class="action-btn" onclick="toggleComments('${post.id}')">
            <i data-lucide="message-circle"></i>
            <span>${post.comments.length}</span>
          </button>
          <button class="action-btn" onclick="alert('री-पोस्ट केले (Reposted to Threads)!')">
            <i data-lucide="repeat"></i>
            <span>री-पोस्ट (Repost)</span>
          </button>
          <button class="action-btn" onclick="sharePost('${post.id}')">
            <i data-lucide="share-2"></i>
            <span>शेअर</span>
          </button>
        </div>

        <!-- Comments Drawer -->
        <div id="comments-box-${post.id}" style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.05); display:none;">
          ${post.comments.map(c => `
            <div style="background: rgba(255,255,255,0.04); padding: 8px 12px; border-radius: var(--radius-md); margin-bottom: 6px; font-size: 0.85rem;">
              <strong style="color: var(--accent-cyan);">युझर:</strong> ${c}
            </div>
          `).join('')}

          <div style="display:flex; gap:8px; margin-top:10px;">
            <input type="text" id="comment-input-${post.id}" placeholder="कमेंट लिहा..." style="flex:1; padding:8px 12px; border-radius:var(--radius-full); background:rgba(255,255,255,0.06); border:1px solid var(--glass-border); color:#fff; font-size:0.82rem; outline:none;">
            <button class="btn-create" style="padding:6px 14px; font-size:0.8rem;" onclick="addComment('${post.id}')">पाठवा</button>
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}
ex; align-items:center; gap:8px;">
                🚩 Report
              </button>
            </div>
          </div>
        </div>



        <p class="post-text">${post.text}</p>

        ${post.mediaUrl ? `
          <div class="post-media-box">
            ${post.mediaType === 'video' ? `
              <video src="${post.mediaUrl}" controls poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80" style="width:100%; border-radius: var(--radius-md);"></video>
            ` : `
              <img src="${post.mediaUrl}" alt="Post media">
            `}
          </div>
        ` : ''}

        <div class="post-actions">
          <button class="action-btn ${post.isLiked ? 'liked' : ''}" onclick="toggleLike('${post.id}')">
            <i data-lucide="heart" fill="${post.isLiked ? 'currentColor' : 'none'}"></i>
            <span>${post.likes} आवडी</span>
          </button>
          <button class="action-btn" onclick="toggleComments('${post.id}')">
            <i data-lucide="message-circle"></i>
            <span>${post.comments.length} कमेंट्स</span>
          </button>
          <button class="action-btn" onclick="sharePost('${post.id}')">
            <i data-lucide="share-2"></i>
            <span>शेअर</span>
          </button>
        </div>

        <!-- Comments Drawer -->
        <div id="comments-box-${post.id}" style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.05);">
          ${post.comments.map(c => `
            <div style="background: rgba(255,255,255,0.04); padding: 8px 12px; border-radius: var(--radius-md); margin-bottom: 6px; font-size: 0.85rem;">
              <strong style="color: var(--accent-cyan);">युझर:</strong> ${c}
            </div>
          `).join('')}

          <div style="display:flex; gap:8px; margin-top:10px;">
            <input type="text" id="comment-input-${post.id}" placeholder="कमेंट लिहा..." style="flex:1; padding:8px 12px; border-radius:var(--radius-full); background:rgba(255,255,255,0.06); border:1px solid var(--glass-border); color:#fff; font-size:0.82rem; outline:none;">
            <button class="btn-create" style="padding:6px 14px; font-size:0.8rem;" onclick="addComment('${post.id}')">पाठवा</button>
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

/* -------------------------------------------------------------
   2. REELS VIEW (Instagram Shorts/Reels Style)
----------------------------------------------------------------*/
function renderReelsView(container) {
  let html = `
    <div class="reels-container">
      <div style="text-align: center; margin-bottom: 10px;">
        <h2 style="font-family: var(--font-heading); font-size: 1.5rem; background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">OmniReels — ६० सेकंद शॉर्ट व्हिडिओ</h2>
        <p style="color: var(--text-muted); font-size: 0.85rem;">स्क्रोल करा आणि नवीन ट्रेंडिंग रील्सचा आनंद घ्या</p>
      </div>
  `;

  state.reels.forEach(reel => {
    html += `
      <div class="reel-card">
        <video class="reel-video" src="${reel.videoUrl}" poster="${reel.posterUrl || 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&auto=format&fit=crop&q=80'}" loop controls preload="metadata"></video>
        
        <div class="reel-overlay">
          <h4 style="font-size: 1rem; font-weight:700; margin-bottom:4px; text-shadow:0 2px 4px rgba(0,0,0,0.8);">${reel.author}</h4>
          <p style="font-size: 0.82rem; color: #e5e7eb; text-shadow:0 2px 4px rgba(0,0,0,0.8);">${reel.title}</p>
        </div>

        <div class="reel-side-actions">
          <button class="reel-action-btn" onclick="alert('लाइक केले!')">
            <i data-lucide="heart"></i>
            <span style="font-size: 0.7rem; font-weight:700;">${reel.likes}</span>
          </button>
          <button class="reel-action-btn">
            <i data-lucide="message-square"></i>
            <span style="font-size: 0.7rem; font-weight:700;">${reel.comments}</span>
          </button>
          <button class="reel-action-btn">
            <i data-lucide="send"></i>
            <span style="font-size: 0.7rem; font-weight:700;">${reel.shares}</span>
          </button>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}


/* -------------------------------------------------------------
   3. WATCH VIEW (YouTube HD Video & Podcasts)
----------------------------------------------------------------*/
function renderWatchView(container) {
  let html = `
    <div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.6rem;">OmniWatch & Podcasts</h2>
          <p style="color: var(--text-muted); font-size: 0.85rem;">YouTube सारखे चॅनेल्स आणि HD व्हिडिओ स्ट्रीमिंग</p>
        </div>
        <button class="btn-create" onclick="alert('नवीन चॅनेल तयार करा सुविधा सुरु होत आहे')">+ नवीन चॅनेल</button>
      </div>

      <!-- Featured Video Player -->
      <div class="card-glass" style="padding:0; overflow:hidden; margin-bottom: 28px;">
        <video controls style="width:100%; max-height:420px; background:#000;" poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1000&auto=format&fit=crop&q=80" preload="metadata">
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
        </video>
        <div style="padding: 20px;">
          <h3 style="font-size: 1.3rem; margin-bottom: 8px;">🎬 Featured Stream: Future of AI & Super Apps in 2026</h3>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; gap:12px; align-items:center;">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" class="avatar">
              <div>
                <h4 style="font-size: 0.95rem;">OmniVibe Official Channel</h4>
                <p style="font-size: 0.75rem; color: var(--text-muted);">1.2M सबस्क्रायबर्स</p>
              </div>
            </div>
            <button class="btn-create" style="background: linear-gradient(135deg, #ef4444, #dc2626);" onclick="this.innerText='सबस्क्राईब केले ✓'">सबस्क्राईब (Subscribe)</button>
          </div>
        </div>
      </div>


      <!-- Video Grid -->
      <h3 style="font-size: 1.1rem; margin-bottom: 12px;">ट्रेंडिंग व्हिडिओज</h3>
      <div class="watch-grid">
        <div class="video-thumb-card" onclick="alert('व्हिडिओ सुरू होत आहे...')">
          <div class="video-thumb-holder">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=80">
            <span class="duration-badge">१२:४५</span>
          </div>
          <div class="video-details">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" class="avatar" style="width:32px; height:32px;">
            <div class="video-info">
                <h4>Next-Gen Cloud Architecture for Super Apps</h4>
                <p>टेक गुरू मराठी • १.५K व्ह्यूज • २ दिवस</p>
            </div>
          </div>
        </div>

        <div class="video-thumb-card" onclick="alert('व्हिडिओ सुरू होत आहे...')">
          <div class="video-thumb-holder">
            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80">
            <span class="duration-badge">४५:१०</span>
          </div>
          <div class="video-details">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" class="avatar" style="width:32px; height:32px;">
            <div class="video-info">
                <h4>मराठी पॉडकास्ट एपिसोड #०४: स्टार्टअप प्रवासाची कथा</h4>
                <p>मराठी पॉडकास्ट हब • १०K व्ह्यूज • १ आठवडा</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

/* -------------------------------------------------------------
   4. NETWORK VIEW (LinkedIn Style Professional Resume & Jobs)
----------------------------------------------------------------*/
function renderNetworkView(container) {
  let html = `
    <div>
      <!-- Profile Hero -->
      <div class="profile-hero">
        <div class="profile-header-main">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" class="profile-avatar-large">
          <div style="flex:1;">
            <h2 style="font-size: 1.6rem; font-weight:800;">ज्ञानेश्वर (Dnyaneshwar)</h2>
            <p style="color: var(--accent-cyan); font-weight:600;">Full-Stack Engineer & Super App Architect</p>
            <p style="font-size:0.82rem; color: var(--text-muted); margin-top:4px;">📍 Pune, Maharashtra, India • 500+ Connections</p>
            
            <div class="skills-tags">
              <span class="skill-pill">React.js</span>
              <span class="skill-pill">Next.js</span>
              <span class="skill-pill">Node.js</span>
              <span class="skill-pill">AWS Cloud</span>
              <span class="skill-pill">Flutter</span>
            </div>
          </div>
          <button class="btn-create" onclick="alert('Resume PDF Downloaded!')">
            <i data-lucide="download"></i> Resume डाउनलोड
          </button>
        </div>
      </div>

      <!-- Job Portal Section -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
        <h3 style="font-size: 1.2rem; font-weight:700;">💼 LinkedIn Job Portal (नवीन नोकऱ्या)</h3>
        <span style="font-size: 0.8rem; color: var(--accent-cyan); cursor:pointer;">सर्व नोकऱ्या पहा →</span>
      </div>

      <div style="display:flex; flex-direction:column; gap: 14px;">
        ${state.jobs.map(job => `
          <div class="card-glass" style="display:flex; justify-content:space-between; align-items:center; padding:16px;">
            <div>
              <h4 style="font-size: 1.05rem; color: #fff;">${job.title}</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted);">${job.company} • ${job.location}</p>
              <div style="display:flex; gap:10px; margin-top:8px;">
                <span class="badge-tag" style="background:rgba(6,182,212,0.15); color:var(--accent-cyan);">${job.type}</span>
                <span class="badge-tag">${job.salary}</span>
              </div>
            </div>
            <button class="btn-create" onclick="alert('${job.title} साठी तुमचा रिझ्युमे यशस्वीपणे पाठवला!')">Easy Apply (अर्ज करा)</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  container.innerHTML = html;
}

/* -------------------------------------------------------------
   5. THREADS VIEW (Twitter / X Microblogging & Polls)
----------------------------------------------------------------*/
function renderThreadsView(container) {
  let html = `
    <div>
      <div class="hashtag-bar">
        <button class="tag-btn">#OmniVibeLaunch</button>
        <button class="tag-btn">#MaharashtraTech</button>
        <button class="tag-btn">#AI2026</button>
        <button class="tag-btn">#SuperAppIndia</button>
        <button class="tag-btn">#CodingLife</button>
      </div>

      <div class="card-glass thread-card">
        <div style="display:flex; gap:12px; margin-bottom: 12px;">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" class="avatar">
          <div>
            <h4 style="font-size: 0.95rem;">${state.threads[0].author} <span style="color:var(--text-muted); font-size:0.8rem;">${state.threads[0].handle}</span></h4>
            <p style="font-size: 0.95rem; margin-top:6px; color:#e5e7eb;">${state.threads[0].text}</p>
          </div>
        </div>

        <!-- Poll -->
        <div class="poll-box" id="activePollBox">
          ${state.threads[0].pollOptions.map((opt, i) => `
            <div class="poll-option" onclick="votePoll(${i})">
              <div class="poll-bar" style="width: ${opt.votes}%;"></div>
              <span>${opt.text}</span>
              <span>${opt.votes}%</span>
            </div>
          `).join('')}
        </div>

        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;">
          ⚡ १२८ मते • २४ तास शिल्लक
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

/* -------------------------------------------------------------
   6. MARKETPLACE VIEW (Facebook Marketplace Style)
----------------------------------------------------------------*/
function renderMarketplaceView(container) {
  let html = `
    <div>
      <h2 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom:16px;">OmniMarket — खरेदी व विक्री (Marketplace)</h2>
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px;">
        <div class="card-glass" style="padding:12px;">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80" style="width:100%; height:140px; object-fit:cover; border-radius:var(--radius-md);">
          <h4 style="margin-top:10px; font-size:0.95rem;">Wireless Studio Headphones</h4>
          <p style="color:var(--accent-cyan); font-weight:700; margin-top:4px;">₹४,९९९</p>
          <button class="btn-create" style="width:100%; margin-top:10px; padding:6px; font-size:0.8rem;" onclick="alert('विक्रेत्याशी संपर्क साधला जात आहे...')">विक्रेत्याशी चॅट करा</button>
        </div>

        <div class="card-glass" style="padding:12px;">
          <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&auto=format&fit=crop&q=80" style="width:100%; height:140px; object-fit:cover; border-radius:var(--radius-md);">
          <h4 style="margin-top:10px; font-size:0.95rem;">4K Vlog Camera Lens Kit</h4>
          <p style="color:var(--accent-cyan); font-weight:700; margin-top:4px;">₹१८,५००</p>
          <button class="btn-create" style="width:100%; margin-top:10px; padding:6px; font-size:0.8rem;" onclick="alert('विक्रेत्याशी संपर्क साधला जात आहे...')">विक्रेत्याशी चॅट करा</button>
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

/* -------------------------------------------------------------
   INTERACTIVE ACTION HANDLERS
----------------------------------------------------------------*/
function toggleLike(postId) {
  const post = state.posts.find(p => p.id === postId);
  if (post) {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
    if (currentTab === 'feed') renderFeedView(document.getElementById('mainContainer'));
  }
}

function toggleComments(postId) {
  const el = document.getElementById(`comments-box-${postId}`);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}

function addComment(postId) {
  const input = document.getElementById(`comment-input-${postId}`);
  if (input && input.value.trim()) {
    const post = state.posts.find(p => p.id === postId);
    if (post) {
      post.comments.push(input.value.trim());
      renderFeedView(document.getElementById('mainContainer'));
    }
  }
}

function sharePost(postId) {
  alert('पोस्टची लिंक कॉपी केली! मित्रांसोबत शेअर करा.');
}

function votePoll(optionIdx) {
  const poll = state.threads[0].pollOptions;
  poll[optionIdx].votes += 5;
  renderThreadsView(document.getElementById('mainContainer'));
}

// Modal handling & post publishing
function openComposer() {
  document.getElementById('composerModal').classList.add('active');
}

function closeComposer() {
  document.getElementById('composerModal').classList.remove('active');
  clearMediaUpload();
}

let uploadedMediaUrl = null;
let uploadedMediaType = 'image';

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  uploadedMediaUrl = url;
  const previewArea = document.getElementById('mediaPreviewArea');
  const videoPrev = document.getElementById('videoPreview');
  const imgPrev = document.getElementById('imagePreview');

  previewArea.style.display = 'block';

  if (file.type.startsWith('video/')) {
    uploadedMediaType = 'video';
    videoPrev.src = url;
    videoPrev.style.display = 'block';
    imgPrev.style.display = 'none';
  } else {
    uploadedMediaType = 'image';
    imgPrev.src = url;
    imgPrev.style.display = 'block';
    videoPrev.style.display = 'none';
  }
}

function clearMediaUpload() {
  uploadedMediaUrl = null;
  document.getElementById('mediaPreviewArea').style.display = 'none';
  document.getElementById('fileMediaInput').value = '';
}

function submitNewPost() {
  const textInput = document.getElementById('postContentInput');
  const text = textInput.value.trim();

  if (!text && !uploadedMediaUrl) {
    alert('कृपया काही तरी मजकूर किंवा फाईल निवडा!');
    return;
  }

  const newPost = {
    id: 'p' + Date.now(),
    author: 'ज्ञानेश्वर (You)',
    username: '@dnyaneshwar_dev',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    time: 'आत्ताच',
    tag: uploadedMediaType === 'video' ? 'MP4 Upload' : 'OmniVibe Post',
    text: text || 'नवीन मीडिया फाईल पब्लिश केली.',
    mediaType: uploadedMediaUrl ? uploadedMediaType : null,
    mediaUrl: uploadedMediaUrl || null,
    likes: 1,
    isLiked: true,
    comments: [],
    type: 'feed'
  };

  state.posts.unshift(newPost);
  textInput.value = '';
  closeComposer();

  if (currentTab !== 'feed') {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-tab="feed"]').classList.add('active');
    currentTab = 'feed';
  }
  renderTabContent('feed');
}

function addHashtag(tag) {
  const textInput = document.getElementById('postContentInput');
  textInput.value += ' ' + tag;
}

function addPollToComposer() {
  const textInput = document.getElementById('postContentInput');
  textInput.value += '\n\n📊 पोल प्रश्न: तुमचे मत काय आहे?\n1. पर्याय A\n2. पर्याय B';
}

/* -------------------------------------------------------------
   7. CREATOR ANALYTICS VIEW (Cross-Platform Insights Dashboard)
----------------------------------------------------------------*/
function renderAnalyticsView(container) {
  let html = `
    <div>
      <div style="margin-bottom: 20px;">
        <h2 style="font-family: var(--font-heading); font-size: 1.6rem;">OmniAnalytics Dashboard</h2>
        <p style="color: var(--text-muted); font-size: 0.85rem;">सर्व मीडिया (Videos, Reels, Blogs & Jobs) मधील तुमचे परफॉर्मन्स रिपोर्ट</p>
      </div>

      <!-- Stat Cards Grid -->
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:16px; margin-bottom:24px;">
        <div class="card-glass" style="padding:16px;">
          <p style="font-size:0.8rem; color:var(--text-muted);">Total Views (सर्व मीडिया)</p>
          <h2 style="font-size:1.8rem; color:#fff; font-family:var(--font-heading);">1.42M</h2>
          <span style="font-size:0.75rem; color:#10b981;">▲ +14.2% या महिन्यात</span>
        </div>

        <div class="card-glass" style="padding:16px;">
          <p style="font-size:0.8rem; color:var(--text-muted);">Ad Revenue Share</p>
          <h2 style="font-size:1.8rem; color:var(--accent-cyan); font-family:var(--font-heading);">$3,480.50</h2>
          <span style="font-size:0.75rem; color:#10b981;">▲ +22.0% Payout</span>
        </div>

        <div class="card-glass" style="padding:16px;">
          <p style="font-size:0.8rem; color:var(--text-muted);">OmniCoins Earnt</p>
          <h2 style="font-size:1.8rem; color:#fbbf24; font-family:var(--font-heading);">🪙 48,200</h2>
          <span style="font-size:0.75rem; color:#10b981;">▲ Tipped by 1,240 fans</span>
        </div>

        <div class="card-glass" style="padding:16px;">
          <p style="font-size:0.8rem; color:var(--text-muted);">Total Subscribers</p>
          <h2 style="font-size:1.8rem; color:var(--accent-pink); font-family:var(--font-heading);">128.4K</h2>
          <span style="font-size:0.75rem; color:#10b981;">▲ +3.1K new</span>
        </div>
      </div>

      <!-- Performance Comparison Chart Simulation -->
      <div class="card-glass" style="padding:20px; margin-bottom:24px;">
        <h3 style="font-size:1.1rem; margin-bottom:14px;">Cross-Media Engagement Breakdown</h3>
        
        <div style="display:flex; flex-direction:column; gap:12px;">
          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
              <span>📹 Long Videos (YouTube Style)</span>
              <strong>580,000 Views (40%)</strong>
            </div>
            <div style="background:rgba(255,255,255,0.06); height:10px; border-radius:5px; overflow:hidden;">
              <div style="background:var(--primary-gradient); width:40%; height:100%;"></div>
            </div>
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
              <span>📱 Short Reels (Instagram Style)</span>
              <strong>620,000 Views (44%)</strong>
            </div>
            <div style="background:rgba(255,255,255,0.06); height:10px; border-radius:5px; overflow:hidden;">
              <div style="background:var(--accent-pink); width:44%; height:100%;"></div>
            </div>
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
              <span>📝 Medium & LinkedIn Blogs</span>
              <strong>220,000 Reads (16%)</strong>
            </div>
            <div style="background:rgba(255,255,255,0.06); height:10px; border-radius:5px; overflow:hidden;">
              <div style="background:var(--accent-cyan); width:16%; height:100%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

/* Modal and Tipping Handlers */
let userBalance = 1250;

function openWalletModal() {
  document.getElementById('walletModal').classList.add('active');
}

function closeWalletModal() {
  document.getElementById('walletModal').classList.remove('active');
}

function addOmniCoins(amount) {
  userBalance += amount;
  document.getElementById('omnicoinBalance').innerText = userBalance.toLocaleString() + ' OmniCoins';
  alert(`यशस्वी! ${amount} OmniCoins तुमच्या वॉलेटमध्ये जमा झाले.`);
}

function tipCreator(postId) {
  if (userBalance < 50) {
    alert('तुमच्या वॉलेटमध्ये पुरेसे OmniCoins नाहीत! कृपया आधी कॉईन्स खरेदी करा.');
    openWalletModal();
    return;
  }
  userBalance -= 50;
  document.getElementById('omnicoinBalance').innerText = userBalance.toLocaleString() + ' OmniCoins';
  alert('🪙 ५० OmniCoins या क्रिएटरला टिप म्हणून पाठवले! तुमचे आभार.');
}

function openDmModal() {
  document.getElementById('dmModal').classList.add('active');
}

function closeDmModal() {
  document.getElementById('dmModal').classList.remove('active');
}

function selectDmUser(userName) {
  alert(`${userName} सोबत चॅट विंडो उघडली आहे.`);
}

/* Registration & Auth Handlers */
let currentAuthTab = 'login';

function openAuthModal() {
  document.getElementById('authModal').classList.add('active');
}

function closeAuthModal() {
  document.getElementById('authModal').classList.remove('active');
}

function switchAuthTab(tab) {
  currentAuthTab = tab;
  const loginTab = document.getElementById('tabAuthLogin');
  const otpTab = document.getElementById('tabAuthOtp');
  const signupTab = document.getElementById('tabAuthSignup');
  const nameGroup = document.getElementById('signupNameGroup');
  const otpGroup = document.getElementById('otpMobileGroup');
  const emailPassGroup = document.getElementById('emailPassGroup');
  const submitBtn = document.getElementById('lblAuthSubmitBtn');

  // Reset tab borders
  [loginTab, otpTab, signupTab].forEach(t => {
    t.style.borderColor = 'transparent';
    t.style.color = 'var(--text-muted)';
  });

  if (tab === 'signup') {
    signupTab.style.borderColor = 'var(--accent-cyan)';
    signupTab.style.color = 'var(--accent-cyan)';
    nameGroup.style.display = 'block';
    otpGroup.style.display = 'none';
    emailPassGroup.style.display = 'block';
    submitBtn.innerText = 'नवीन अकाऊंट तयार करा (Create Account)';
  } else if (tab === 'otp') {
    otpTab.style.borderColor = 'var(--accent-cyan)';
    otpTab.style.color = 'var(--accent-cyan)';
    nameGroup.style.display = 'none';
    otpGroup.style.display = 'block';
    emailPassGroup.style.display = 'none';
    submitBtn.innerText = 'OTP द्वारे प्रविष्ट व्हा (Verify OTP)';
  } else {
    loginTab.style.borderColor = 'var(--accent-cyan)';
    loginTab.style.color = 'var(--accent-cyan)';
    nameGroup.style.display = 'none';
    otpGroup.style.display = 'none';
    emailPassGroup.style.display = 'block';
    submitBtn.innerText = 'प्रवेश करा (Sign In)';
  }
}

function handleSocialLogin(provider) {
  alert(`🔐 ${provider} Single Sign-On (SSO) द्वारे यशस्वीरीत्या लॉगिन झाले! OmniPlatform वर तुमचे स्वागत आहे.`);
  closeAuthModal();
}

function sendOtp() {
  const mob = document.getElementById('authMobile').value;
  if (!mob) {
    alert('कृपया तुमचा मोबाईल नंबर प्रविष्ट करा!');
    return;
  }
  alert(`📱 OTP तुमच्या मोबाईल नंबर (${mob}) वर पाठवला आहे. कोड: 4829`);
}


/* Voice Search & Speech Recognition */
function startVoiceSearch() {
  const micIcon = document.getElementById('micIcon');
  micIcon.style.color = '#ef4444';
  
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'mr-IN'; // Default Marathi Voice Search
    recognition.start();

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      document.getElementById('searchInput').value = transcript;
      micIcon.style.color = 'var(--accent-cyan)';
      alert(`🎙️ आवाजी शोध प्राप्त झाला: "${transcript}"`);
    };

    recognition.onerror = () => {
      micIcon.style.color = 'var(--accent-cyan)';
      simulateVoiceSearch();
    };
  } else {
    simulateVoiceSearch();
  }
}

function simulateVoiceSearch() {
  setTimeout(() => {
    document.getElementById('searchInput').value = 'मराठी पॉडकास्ट आणि 4K व्हिडियो';
    document.getElementById('micIcon').style.color = 'var(--accent-cyan)';
    alert('🎙️ व्हॉईस सर्च: "मराठी पॉडकास्ट आणि 4K व्हिडियो" शोधत आहे...');
  }, 1200);
}

/* Floating Messenger Chat Dock Handlers */
function toggleMiniChat() {
  const win = document.getElementById('miniChatWindow');
  win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
}

function sendMiniChatMessage() {
  const input = document.getElementById('miniChatInput');
  const msg = input.value.trim();
  if (!msg) return;

  const logs = document.getElementById('miniChatLogs');
  const bubble = document.createElement('div');
  bubble.style.cssText = 'align-self: flex-end; background: var(--primary); padding: 6px 10px; border-radius: var(--radius-md); color: #fff; margin-top:4px;';
  bubble.innerText = msg;
  logs.appendChild(bubble);
  input.value = '';
  logs.scrollTop = logs.scrollHeight;
}

/* Unified Filterable Notification Modal Handlers */
function openNotifModal() {
  document.getElementById('notifModal').classList.add('active');
}

function closeNotifModal() {
  document.getElementById('notifModal').classList.remove('active');
}

/* Collapsible Sidebar & Navigation Handlers */
function toggleSidebar() {
  const sidebar = document.getElementById('sidebarNav');
  sidebar.classList.toggle('collapsed');
}

function toggleRightSidebar() {
  const rightSidebar = document.getElementById('rightSidebar');
  const icon = document.getElementById('rightSidebarIcon');
  rightSidebar.classList.toggle('collapsed');
  
  if (rightSidebar.classList.contains('collapsed')) {
    icon.setAttribute('data-lucide', 'chevron-left');
  } else {
    icon.setAttribute('data-lucide', 'chevron-right');
  }
  lucide.createIcons();
}

function togglePostOptions(postId) {
  const menu = document.getElementById(`postOptions-${postId}`);
  if (menu) {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }
}

function savePost(postId) {
  alert('📌 पोस्ट सेव्ह केली! तुमच्या सेव्ह केलेल्या लिस्टमध्ये जोडली आहे.');
  togglePostOptions(postId);
}

function notInterested(postId) {
  const card = document.getElementById(`post-${postId}`);
  if (card) card.style.opacity = '0.4';
  alert('🚫 या प्रकारच्या पोस्ट्स तुम्हाला आता कमी दिसतील.');
  togglePostOptions(postId);
}

/* -------------------------------------------------------------
   8. SAVED VAULT VIEW (Offline Bookmarks & Saved Items)
----------------------------------------------------------------*/
function renderSavedView(container) {
  let html = `
    <div>
      <div style="margin-bottom: 20px;">
        <h2 style="font-family: var(--font-heading); font-size: 1.6rem;">Saved Vault & Offline Downloads</h2>
        <p style="color: var(--text-muted); font-size: 0.85rem;">तुम्ही सेव्ह केलेले व्हिडिऑज, ब्लॉग्स आणि ऑफलाईन कंटेंन्ट्स</p>
      </div>

      <div style="display:flex; flex-direction:column; gap:14px;">
        <div class="card-glass" style="display:flex; gap:16px; align-items:center; padding:16px;">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&auto=format&fit=crop&q=80" style="width:120px; height:80px; object-fit:cover; border-radius:var(--radius-md);">
          <div>
            <h4 style="font-size:1.05rem;">Next-Gen Cloud Architecture for Super Apps</h4>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">📹 Video Bookmark • Saved 2 days ago</p>
            <span class="badge-tag" style="background:rgba(16,185,129,0.15); color:#10b981; margin-top:6px;">⚡ Downloaded Offline</span>
          </div>
        </div>

        <div class="card-glass" style="display:flex; gap:16px; align-items:center; padding:16px;">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=80" style="width:120px; height:80px; object-fit:cover; border-radius:var(--radius-md);">
          <div>
            <h4 style="font-size:1.05rem;">महाराष्ट्र तंत्रज्ञान क्रांती २०२६ — सविस्तर लेख</h4>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">📝 Medium Blog Article • Saved yesterday</p>
          </div>
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

/* Theme Switcher Toggle (Dark/Light Mode 🌙/☀️) */
let isDarkMode = true;
function toggleTheme() {
  isDarkMode = !isDarkMode;
  const icon = document.getElementById('themeIcon');
  if (isDarkMode) {
    document.body.style.backgroundColor = '#090d16';
    document.body.style.color = '#f3f4f6';
    icon.setAttribute('data-lucide', 'moon');
    alert('🌙 Dark Mode चालू केला.');
  } else {
    document.body.style.backgroundColor = '#f8fafc';
    document.body.style.color = '#0f172a';
    icon.setAttribute('data-lucide', 'sun');
    alert('☀️ Light Mode चालू केला.');
  }
  lucide.createIcons();
}

/* OmniMeet Video & Audio Call Handlers */
function startOmniMeetCall(type) {
  alert(`📞 OmniMeet WebRTC HD ${type.toUpperCase()} Call सुरू होत आहे... राकेश देशमुख यांच्याशी कनेक्ट करत आहे.`);
}

/* Persistent Audio/Podcast Dock Handlers */
let isAudioPlaying = true;
function toggleAudioPlay() {
  isAudioPlaying = !isAudioPlaying;
  const icon = document.getElementById('audioPlayIcon');
  if (isAudioPlaying) {
    icon.setAttribute('data-lucide', 'pause');
    alert('▶️ पॉडकास्ट प्ले होत आहे...');
  } else {
    icon.setAttribute('data-lucide', 'play');
    alert('⏸️ पॉडकास्ट पॉझ केले.');
  }
  lucide.createIcons();
}

function prevAudio() {
  alert('⏮️ मागील पॉडकास्ट ट्रॅक सुरू झाला.');
}

function nextAudio() {
  alert('⏭️ पुढील पॉडकास्ट ट्रॅक सुरू झाला.');
}

function closeAudioDock() {
  document.getElementById('persistentAudioDock').style.display = 'none';
}






