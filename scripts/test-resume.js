#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Resume Setup Check');
console.log('=====================\n');

const publicDir = path.join(__dirname, '..', 'public');
const resumePath = path.join(publicDir, 'Anojan_Yogenthiran_Resume.pdf');

// Check if public directory exists
if (!fs.existsSync(publicDir)) {
  console.log('❌ Public directory not found');
  process.exit(1);
}

// Check if resume.pdf exists
if (fs.existsSync(resumePath)) {
  const stats = fs.statSync(resumePath);
  const fileSizeInBytes = stats.size;
  const fileSizeInKB = fileSizeInBytes / 1024;
  
  console.log('✅ Resume PDF found:', resumePath);
  console.log(`📏 File size: ${fileSizeInKB.toFixed(2)} KB`);
  
  if (fileSizeInKB < 1) {
    console.log('⚠️  File is very small - this might be the placeholder');
    console.log('   Replace with your actual resume PDF for production use');
  } else if (fileSizeInKB > 10240) {
    console.log('⚠️  File is large (>10MB) - consider optimizing for web');
  } else {
    console.log('✅ File size looks good for web use');
  }
} else {
  console.log('❌ Resume PDF not found:', resumePath);
  console.log('   Please add your resume.pdf file to the public/ directory');
}

console.log('\n📋 Next Steps:');
console.log('1. ✅ Resume already added and configured');
console.log('2. Run "pnpm build" to test locally');
console.log('3. Push to GitHub to deploy');
console.log('\n🌐 Your resume will be available at:');
console.log('   https://ayogenthiran.github.io/Anojan_Yogenthiran_Resume.pdf');
