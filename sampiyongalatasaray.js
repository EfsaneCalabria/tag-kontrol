////////////////////NORMAL TAG İÇİN/////////////////////////////////////////////7
const tag = "tagın"
const tagRolü = "rolün"

client.on('ready', () => {
  setInterval(() => {
    const sunucu = client.guilds.cache.get("Sunucu ID");
    sunucu.members.fetch().then((member) => {
      member.forEach((uye) => {
        if (uye.roles.cache.has(tagRolü) && !uye.user.username.includes(tag)) {
          uye.roles.remove(tagRolü);
        } else if (!member.roles.cache.has(tagRolü) && uye.user.username.includes(tag)) {
          uye.roles.add(tagRolü);
        }
      });
    });
  }, SÜREYİ BURAYA YAZIN KAÇ İSTİYORSANIZ);
});
////////////////////ETİKET İÇİN/////////////////////////////////////////////7
const tag = "etiketin"
const tagRolü = "rolün"

client.on('ready', () => {
  setInterval(() => {
    const sunucu = client.guilds.cache.get("Sunucu ID");
    sunucu.members.fetch().then((member) => {
      member.forEach((uye) => {
        if (uye.roles.cache.has(tagRolü) && !uye.user.discriminator.includes(tag)) {
          uye.roles.remove(tagRolü);
        } else if (!member.roles.cache.has(tagRolü) && uye.user.discriminator.includes(tag)) {
          uye.roles.add(tagRolü);
        }
      });
    });
  }, SÜREYİ BURAYA YAZIN KAÇ İSTİYORSANIZ);
});

////////////////////ETİKET-TAG İÇİN/////////////////////////////////////////////
const tag = " ";
const etiket = " ";
const tagRolü = " ";

client.on('ready', () => {
  setInterval(() => {
    const sunucu = client.guilds.cache.get("SUNUCU ID");
    sunucu.members.fetch().then((member) => {
      member.forEach((uye) => {
        if (uye.roles.cache.has(tagRolü) && !uye.user.username.includes(tag) && !uye.user.discriminator.includes(etiket)) {
          uye.roles.remove(tagRolü);
        } else if (!member.roles.cache.has(tagRolü) && (uye.user.username.includes(tag) || uye.user.discriminator.includes(etiket))) {
          uye.roles.add(tagRolü);
        }
      });
    });
  }, SÜREYİ BURAYA YAZIN KAÇ İSTİYORSANIZ);
});
