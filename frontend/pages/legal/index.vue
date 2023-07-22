<template>
  <div>
    <Head
      title="Legal Notice"
      description="Imprint of the portfolio page of Niklas Buchfink"
    />
    <r-grid class="legalGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="legalHeadline" span="8" span-s="2+6" span-xs="1-4">
        <h1>Legal Notice</h1>
      </r-cell>
      <r-cell class="legalContent" span="8" span-s="2+6" span-xs="1-4">
        <div
          v-if="legalpage.content"
          v-html="$md.render(legalpage.content)"
        ></div>
      </r-cell>
    </r-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      legalpage: {
        content: `        
Niklas Buchfink
Lerchenweg 15
17159 Dargun
Germany

### Represented by:
Niklas Buchfink

### Contact:
Phone: +49 1525 9147957
E–Mail: hey@niklasbuchfink.com

## Liability for contents
The contents of these pages were created with the greatest care. However, I can not guarantee the accuracy, completeness and timeliness of the content. As a service provider I am responsible according to § 7 Abs.1 TMG for own contents on these pages under the general laws. According to §§ 8 to 10 TMG I am not obligated to monitor transmitted or stored information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under the general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. Upon becoming aware of such infringements, this content will be removed immediately.

## Liability for links
This website contains links to external websites of third parties, on whose contents I have no influence. Therefore, I can not assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, such links will be removed immediately.

## Online dispute resolution
The European Commission provides an online dispute resolution platform at https://ec.europa.eu/consumers that consumers can use to resolve a dispute and where more information on dispute resolution can be found.
        `,
      },
    }
  },
}
</script>

<style lang="scss">
.legalHeadline {
  margin-top: 8rem;
}
.legalContent {
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
