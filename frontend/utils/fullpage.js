export function calculateSectionOffsets() {
  let sections = document.getElementsByClassName('fullpage');
  let length = sections.length;
  for (let i = 0; i < length; i++) {
      let sectionOffset = sections[i].offsetTop;
      this.offsets.push(sectionOffset);
  }
}

export function scrollToSection(id, force = false) {
  if (this.inMove && !force) return false;
  this.activeSection = id;
  this.inMove = true;
  document.getElementsByClassName('fullpage')[id].scrollIntoView({
      behavior: 'smooth'
  });
  setTimeout(() => {
      this.inMove = false;
  }, 800);
}

export function handleMouseWheel(e) {
  if (e.wheelDelta < 30 && !this.inMove) {
      this.moveUp();
  } else if (e.wheelDelta > 30 && !this.inMove) {
      this.moveDown();
  }
  e.preventDefault();
  return false;
}

export function moveDown() {
  this.inMove = true;
  this.activeSection--;
  if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;
  this.scrollToSection(this.activeSection, true);
}

export function moveUp() {
  this.inMove = true;
  this.activeSection++;
  if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;
  this.scrollToSection(this.activeSection, true);
}

export function touchStart(e) {
  e.preventDefault();
  this.touchStartY = e.touches[0].clientY;
}

export function touchMove(e) {
  if (this.inMove) return false;
  e.preventDefault();
  const currentY = e.touches[0].clientY;
  if (this.touchStartY < currentY) {
      this.moveDown();
  } else {
      this.moveUp();
  }
  this.touchStartY = 0;
  return false;
}
