<script>
// ===== REGISTRATION AUTO CLOSE LOGIC =====
const REG_CLOSE_DATE = new Date('2025-12-31T23:59:59');

function checkRegistrationStatus(){
  const now = new Date();
  const status = document.getElementById('regStatus');
  const action = document.getElementById('regAction');
  const badge = document.getElementById('regBadge');

  if(now > REG_CLOSE_DATE){
    status.textContent = '🚫 Registration Closed';
    action.innerHTML = '<p style="margin-top:16px; font-weight:bold; color:#dc2626;">Registrations for MPL 2026 are now closed.</p>';
    badge.textContent = 'Closed';
    badge.style.background = '#fee2e2';
    badge.style.color = '#991b1b';
  }
}

checkRegistrationStatus();

// ===== MEMBER ID + ACCESS CODE LOGIN (FRONTEND ONLY) =====
function checkAccess(){
  const memberId = document.getElementById('loginMemberId').value.trim();
  const code = document.getElementById('loginCode').value.trim();
  const msg = document.getElementById('loginMsg');

  if(!memberId || !code){
    msg.textContent = "Please enter Member ID and Access Code";
    return;
  }

  if(memberId.startsWith("MPL-") && code.startsWith("MPL-")){
    localStorage.setItem('mpl_access','granted');
    document.getElementById('accessGate').style.display = 'none';
  } else {
    msg.textContent = "Invalid Member ID or Access Code";
  }
}

function acceptPrivacy(){
  localStorage.setItem('mpl_privacy_accepted','yes');
  document.getElementById('privacyModal').style.display='none';
  document.getElementById('accessGate').style.pointerEvents='auto';
}

window.addEventListener('load',()=>{
  if(localStorage.getItem('mpl_privacy_accepted')==='yes'){
    document.getElementById('privacyModal').style.display='none';
  }
  if(localStorage.getItem('mpl_access')==='granted'){
    document.getElementById('accessGate').style.display='none';
  }
});
</script>
<script>
function acceptPrivacy() {
  const privacy = document.getElementById("privacyModal");
  if (privacy) {
    privacy.style.display = "none";
  }
}
</script>

