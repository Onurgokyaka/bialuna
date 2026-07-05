const whatsappNumber = document.body.dataset.whatsapp || "905XXXXXXXXX";
function whatsappUrl(message){return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;}
function openWhatsapp(message){window.open(whatsappUrl(message),"_blank","noopener");}
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll(".js-whatsapp-general").forEach((link)=>{link.href=whatsappUrl("Merhaba, Bialuna Collection ürünleri hakkında bilgi almak istiyorum.");});
document.querySelectorAll(".js-whatsapp-product").forEach((button)=>{button.addEventListener("click",()=>{const product=button.dataset.product||"bir ürün";const price=button.dataset.price||"";openWhatsapp(`Merhaba, ${product} ${price ? "(" + price + ")" : ""} ürünü hakkında bilgi almak istiyorum.`);});});
document.getElementById("contactForm").addEventListener("submit",(event)=>{event.preventDefault();const name=document.getElementById("name").value.trim();const product=document.getElementById("product").value.trim();const message=document.getElementById("message").value.trim();openWhatsapp(`Merhaba, Bialuna Collection için bilgi almak istiyorum.\n\nAd Soyad: ${name || "-"}\nÜrün: ${product || "-"}\nNot: ${message || "-"}`);});
