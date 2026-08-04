const fs = require('fs');
const path = require('path');

const dest = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dest)) {
  fs.mkdirSync(dest, { recursive: true });
}

const filePaths = {
  'logo.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\167f1d97-a4a7-483c-ae13-0d510962307e\\media__1785767852128.png',
  'icon.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\167f1d97-a4a7-483c-ae13-0d510962307e\\media__1785767852128.png',
  'favicon.ico': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\167f1d97-a4a7-483c-ae13-0d510962307e\\media__1785767852128.png',
  'favicon-32x32.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\167f1d97-a4a7-483c-ae13-0d510962307e\\media__1785767852128.png',
  'favicon-16x16.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\167f1d97-a4a7-483c-ae13-0d510962307e\\media__1785767852128.png',
  'apple-touch-icon.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\167f1d97-a4a7-483c-ae13-0d510962307e\\media__1785767852128.png',
  'workspace.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\workspace_render_1785741974696.png',
  'pugazhenthi.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\media__1785748658614.png',
  'yuvaraj.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\media__1785748666112.png',
  'mockup_corporate.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\mockup_corporate_1785742732569.png',
  'mockup_restaurant.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\mockup_restaurant_1785742743247.png',
  'mockup_hospital.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\mockup_hospital_1785742753466.png',
  'mockup_school.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\mockup_school_1785742764049.png',
  'mockup_realestate.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\mockup_realestate_1785742773835.png',
  'mockup_ecommerce.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\mockup_ecommerce_1785742785491.png',
  'mockup_saas.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\mockup_saas_1785742796802.png',
  'mockup_mobile.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\mockup_mobile_1785742808388.png',
  'holographic_map.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\holographic_map_1785744287821.png',
  'futuristic_skyline.png': 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\b78a52ca-34ad-4e9f-a72f-8295c23252be\\futuristic_skyline_1785744639464.png'
};

for (const [filename, sourcePath] of Object.entries(filePaths)) {
  const destPath = path.join(dest, filename);
  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${filename}`);
  } catch (err) {
    console.error(`Failed to copy ${filename}:`, err.message);
  }
}
