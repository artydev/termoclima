
export default function Diaporama() {
    return (
        <div class="swiper"  >
            <div class="swiper-wrapper" style="height:100vh">

                <div class="swiper-slide" style="background:#FF3131;">
                    <img src="1-1.webp"  style="border-right:1px solid #FFFFFF55;border-left:1px solid #FFFFFF88" />
                </div>
                <div class="swiper-slide" style="background:#8B54FE" >
                    <img src="2.webp"    style="border-right:1px solid #FFFFFF55;border-left:1px solid #FFFFFF88" />
                </div>
                <div class="swiper-slide" style="background:#FE5758" >
                    <img src="3.webp"   style="border-right:1px solid #FFFFFF55;border-left:1px solid #FFFFFF88" />
                </div>
                <div class="swiper-slide" style="background:#FFDD59" >
                    <img src="4.webp"   style="border-right:1px solid #FFFFFF55;border-left:1px solid #FFFFFF88" />
                </div>
                <div class="swiper-slide" style="background:#0097B1" >
                    <img src="5.webp"   style="border-right:1px solid #FFFFFF55;border-left:1px solid #FFFFFF88" />
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    );
}



