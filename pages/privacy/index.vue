<template>
  <div>
    <Head
      title="Privacy Policy"
      description="Privacy Statement of the portfolio page of Niklas Buchfink"
    />
    <r-grid class="privacyGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="privacyHeadline" span="8" span-s="2+6" span-xs="1-4">
        <h1>Privacy Policy</h1>
      </r-cell>

      <r-cell class="privacyContent" span="8" span-s="2+6" span-xs="1-4">
        <div
          v-if="privacypage.content"
          v-html="$md.render(privacypage.content)"
        ></div>
      </r-cell>
    </r-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      privacypage: {
        content: `        
## Preamble

Article 12 of the EU General Data Protection Regulation (DSGVO for short) requires that I explain to you "in a precise, transparent, understandable and easily accessible form [and] in clear and simple language" what is happening here on this website.

## 1 Hosting

This website is hosted by the Vercel and Cloudinary. The hosting services are used to provide the following services: Infrastructure and platform services, computing capacity, storage space and database services, security services and technical maintenance services.

In this context the hosting providers, process inventory data, contact data, content data, contract data, usage data, meta data and communication data of customers, interested parties and visitors of this online offer on the basis of our legitimate interests in an efficient and secure provision of this online offer pursuant to Art. 6 para. 1 lit. f DSGVO in conjunction with Art. 28 DSGVO. Art. 28 DSGVO (conclusion of order processing contract).

## 2 SSL or TLS encryption

For security reasons and to protect the transmission of confidential content that you send to me as the site operator, our website uses SSL or TLS encryption. This means that data you transmit via this website cannot be read by third parties. You can recognize an encrypted connection by the "https://" address line of your browser and the lock symbol in the browser line.

## 3 Contact

If you send me an e-mail, you have to live with the fact that I receive data from you. I will then see your e-mail address, possibly also your IP address and if I make a real effort and manually evaluate the X header of your e-mail, I may even be able to see the name of the computer from which you wrote the message. This is not magic or hacker art, but an Internet standard. Anyone who can read it can access this data. This is technical - and has been the case for many years. If you send me your data without being asked, you may assume that I will protect your e-mail just as well or badly as all my other e-mails. If you should ever think that I should delete the e-mail you sent me without being asked, you may politely ask me to do so - but I won't promise anything. Again, if you can't live with that, please don't send me an email.

## 4 Google Web Fonts

This Website uses web fonts from Google. The provider is Google Inc, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.

By using these web fonts, it is possible to present you with the presentation of our website that we desire, regardless of which fonts are available to you locally. This is done by retrieving the Google Web Fonts from a Google server in the USA and the associated transfer of your data to Google. This is your IP address and which of our pages you have visited. The use of Google Web Fonts is based on Art. 6 para. 1 lit. f DSGVO. As the operator of this website, we have a legitimate interest in the optimal presentation and transmission of our website.

The company Google is certified for the us-European data protection agreement "Privacy Shield". This data protection agreement is intended to ensure compliance with the level of data protection applicable in the EU.

Details about Google Web Fonts can be found at: https://www.google.com/fonts and further information in Google's privacy policy at: https://policies.google.com/privacy.     
        `,
      },
    }
  },
}
</script>

<style lang="scss">
.privacyHeadline {
  margin-top: 8rem;
}
.privacyContent {
  margin-top: 4rem;
  margin-bottom: 4rem;
  h2 {
    margin-bottom: 1rem;
  }
  h3 {
    margin-top: 2rem;
  }
  p {
    @include paragraph-large;
    margin-bottom: 2rem;
  }
  a {
    text-decoration: underline;
  }
}
</style>
