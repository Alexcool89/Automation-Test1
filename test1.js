describe("eMag.ro", () => {
  it("should have the correct title", async () => {
    await browser.url("https://emag.ro");
    await expect(browser).toHaveTitle("eMAG.ro - Căutarea nu se oprește niciodată");
  });
  it("should contain a cart button", async()=>{
    const cartButton = await $('#my_cart');
    await expect(cartButton).toBeDisplayed();
  });
  it("should open Emag Genius page", async()=>{
    const geniusButton = await $("[title = 'Genius']");
    await geniusButton.click();
    await expect(browser).toHaveTitle("Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro");
  })
});
