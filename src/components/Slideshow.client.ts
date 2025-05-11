export class Slideshow {
  private slideshow: HTMLElement;
  private slideshowWrapper: HTMLElement;
  private page: HTMLElement;
  private isDragging: boolean;
  private startX: number;
  private scrollLeft: number;

  constructor(slideshowId: string, slideshowWrapperId: string, pageId: string) {
    const slideshow = document.getElementById(slideshowId);
    const slideshowWrapper = document.getElementById(slideshowWrapperId);
    const page = document.getElementById(pageId);

    if (!slideshow || !slideshowWrapper || !page) {
      throw new Error('Required elements not found');
    }

    this.slideshow = slideshow;
    this.slideshowWrapper = slideshowWrapper;
    this.page = page;
    this.isDragging = false;
    this.startX = 0;
    this.scrollLeft = 0;

    this.initializeEvents();
    this.updateSizes();
  }

  private updateSizes(): void {
    const pageWidth = this.page?.clientWidth;
    const priceCards = document.querySelectorAll(".price-card");

    if (pageWidth) {
      this.slideshowWrapper.style.width = `${pageWidth}px`;
      for (const card of priceCards) {
        (card as HTMLElement).style.width = `${pageWidth / priceCards.length}px`;
      }
    }
  }

  private initializeEvents(): void {
    window.addEventListener('resize', () => this.updateSizes());

    this.slideshow.addEventListener('mousedown', (e: MouseEvent) => this.startDragging(e));
    this.slideshow.addEventListener('mouseleave', () => this.stopDragging());
    this.slideshow.addEventListener('mouseup', () => this.stopDragging());
    this.slideshow.addEventListener('mousemove', (e: MouseEvent) => this.drag(e));
  }

  private startDragging(e: MouseEvent): void {
    this.isDragging = true;
    this.slideshow.classList.add('active');
    this.startX = e.pageX - this.slideshow.offsetLeft;
    this.scrollLeft = this.slideshow.scrollLeft;
  }

  private stopDragging(): void {
    this.isDragging = false;
    this.slideshow.classList.remove('active');
  }

  private drag(e: MouseEvent): void {
    if (!this.isDragging) return;
    e.preventDefault();
    const x = e.pageX - this.slideshow.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.slideshow.scrollLeft = this.scrollLeft - walk;
  }
}
