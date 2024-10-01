<template>
  <div>
    <Head
      title="Niklas Buchfink - Designer & Engineer"
      description="I’m an interaction designer and electrical engineer with expertise in high fidelity prototyping and web development."
    />
    <r-grid class="frontpageGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="fullpage" span="1-12" span-s="1-8" span-xs="1-4">
        <r-grid
          class="frontpageHeaderGrid"
          columns="12"
          columns-s="8"
          columns-xs="4"
        >
          <r-cell class="headerContentCell" span="6" span-s="2+6" span-xs="1..">
            <div class="frontpageHeaderItem">
              <p class="name">Niklas Buchfink</p>
              <h1>
                Design &amp;<br />
                Engineering
              </h1>
              <p class="frontpageText">
                I’m an interaction designer and electrical engineer with
                expertise in high fidelity prototyping and web development.
              </p>
              <div class="buttonWrapper">
                <a href="mailto:hey@niklasbuchfink.com">
                  <ChatButton />
                </a>
              </div>
            </div>
          </r-cell>
          <r-cell
            class="heroImageCell"
            span="6"
            span-s="3+4"
            order-s="-1"
            span-xs="2-4"
          >
            <div class="heroimageWrapper">
              <HeroImage :heroimage="startpage.heroimage" />
            </div>
          </r-cell>
        </r-grid>
      </r-cell>
      <r-cell
        v-for="project in orderBy(projects, 'order')"
        :key="'Project' + project.id"
        span="12"
        span-s="2+6"
        span-xs="1+4"
        class="cards fullpage"
      >
        <div v-if="project.startpage" class="cardWrapper">
          <Card :project="project" />
        </div>
      </r-cell>
    </r-grid>
  </div>
</template>
<script>
import Vue2Filters from 'vue2-filters'
export default {
  mixins: [Vue2Filters.mixin],
  layout: 'startpage',
  data() {
    return {
      projects: [
        {
          id: 7,
          link: 'https://www.inlang.com/',
          letter: 'I',
          image: {
            alternativeText: 'inlang Web Editor Mockup',
            url: '/inlang-mockup.png',
          },
          color: '#1E293B',
          title: 'inlang',
          subtitle: 'Globalization infrastructure for software',
          categories: [
            {
              id: 1,
              title: 'UX Design',
            },
            {
              id: 2,
              title: 'UI Design',
            },
            {
              id: 3,
              title: 'Development',
            },
          ],
          startpage: true,
          order: 1,
        },
        {
          id: 6,
          link: 'http://getstage.app/',
          letter: 'S',
          image: {
            alternativeText: 'Stage Website Mockup',
            url: 'stage-mockup.png',
          },
          color: '#18181B',
          title: 'Stage',
          subtitle: 'Your always up-to-date personal website',
          categories: [
            {
              id: 1,
              title: 'UX Design',
            },
            {
              id: 2,
              title: 'UI Design',
            },
            {
              id: 3,
              title: 'Development',
            },
          ],
          startpage: true,
          order: 2,
        },
        // {
        //   id: 5,
        //   link: 'https://www.zirkular.dev/',
        //   letter: 'Z',
        //   image: {
        //     alternativeText: 'Zirkular Mockup',
        //     url: 'https://res.cloudinary.com/niklasbuchfink/image/upload/v1667997424/medium_Zirkular_39ffe5d158.png',
        //   },
        //   color: '#FCF98F',
        //   title: 'Zirkular',
        //   subtitle: 'A community-first Workspace for Open Source',
        //   categories: [
        //     {
        //       id: 1,
        //       title: 'UX Design',
        //     },
        //     {
        //       id: 2,
        //       title: 'UI Design',
        //     },
        //     {
        //       id: 3,
        //       title: 'Development',
        //     },
        //   ],
        //   startpage: false,
        //   order: 3,
        // },
        {
          id: 4,
          link: 'https://recapmymusic.vercel.app/',
          letter: 'R',
          image: {
            alternativeText: 'RecapMyMusic Mockup',
            url: 'https://res.cloudinary.com/niklasbuchfink/image/upload/v1667997960/medium_Recap_My_Music_5e675e9327.png',
          },
          color: '#3A3A3A',
          title: 'RECAP_MY_MUSIC',
          subtitle: 'Visualize your individual music taste',
          categories: [
            {
              id: 4,
              title: 'Datavisualization',
            },
            {
              id: 3,
              title: 'Development',
            },
          ],
          startpage: true,
          order: 4,
        },
        {
          id: 3,
          link: 'https://ausstellung.hfg-gmuend.de/s-2121/projekte/melo-the-sound-experience-platform/',
          letter: 'M',
          image: {
            alternativeText: 'Mockup of Melo',
            url: 'https://res.cloudinary.com/niklasbuchfink/image/upload/v1623756106/medium_Melo_Mockup_0b55fd38d1.png',
          },
          color: '#0C2F4E',
          title: 'Melo',
          subtitle:
            'Manage, Edit and Distribute the Sounds of your Digital Experience',
          categories: [
            {
              id: 1,
              title: 'UX Design',
            },
            {
              id: 2,
              title: 'UI Design',
            },
            {
              id: 3,
              title: 'Development',
            },
          ],
          startpage: true,
          order: 5,
        },
        {
          id: 2,
          link: 'https://ausstellung.hfg-gmuend.de/w-2021/projekte/panasonic-image-app',
          letter: 'P',
          image: {
            alternativeText: 'Mockup of Panasonic Image App',
            url: 'https://res.cloudinary.com/niklasbuchfink/image/upload/v1623756192/medium_pia_mockup_f27573df6c.png',
          },
          color: '#201F1F',
          title: 'Panasonic Image App',
          subtitle: 'A Camera Remote App made for Creators',
          categories: [
            {
              id: 1,
              title: 'UX Design',
            },
            {
              id: 2,
              title: 'UI Design',
            },
            {
              id: 5,
              title: 'Prototyping',
            },
          ],
          startpage: true,
          order: 6,
        },
        // {
        //   id: 1,
        //   link: 'https://ausstellung.hfg-gmuend.de/s-2121/projekte/guitar-guitar-learning-adapted-to-you',
        //   letter: 'G',
        //   image: {
        //     alternativeText: 'Mockup of GuitAR App',
        //     url: 'https://res.cloudinary.com/niklasbuchfink/image/upload/v1633301139/medium_Frame_222_62163bfcdb.webp',
        //   },
        //   color: '#E25FEB',
        //   title: 'GuitAR',
        //   subtitle: 'A Guitar Learning Experience adapted to You',
        //   categories: [
        //     {
        //       id: 1,
        //       title: 'UX Design',
        //     },
        //     {
        //       id: 2,
        //       title: 'UI Design',
        //     },
        //     {
        //       id: 5,
        //       title: 'Prototyping',
        //     },
        //   ],
        //   startpage: false,
        //   order: 7,
        // },
      ],
      startpage: {
        heroimage: {
          url: 'https://res.cloudinary.com/niklasbuchfink/image/upload/v1623954621/medium_Profilbild_Small_48d396802e.png',
          alternativeText: 'Portrait of Niklas Buchfink',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.frontpageGrid {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  r-cell {
    display: flex;
    align-items: center;
    &.headerContentCell {
      height: 100vh;
      @media screen and (max-width: $max_width_s) {
        height: 50vh;
      }
      @media screen and (max-width: $max_width_xs) {
        height: 70vh;
      }
    }

    &.heroImageCell {
      align-items: center;
      justify-content: center;
      height: 100vh;
      @media screen and (max-width: $max_width_s) {
        margin-top: 4rem;
        margin-bottom: -4rem;
        height: 50vh;
      }
      @media screen and (max-width: $max_width_xs) {
        height: 30vh;
      }
    }
  }
  .frontpageHeaderItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .name {
      @include headline-3;
      color: rgba($rgb-darkgray, 0.7);
      padding-left: 0.25rem;
    }
    h1 {
      margin: 1.75rem 0;
      color: $color-darkgray;
    }
    .frontpageText {
      @include paragraph-large;
      color: rgba($rgb-darkgray, 0.7);
      margin-bottom: 2.625rem;
      padding-left: 0.25rem;
    }
    .buttonWrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
    }
  }
  .heroimageWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 34.5rem;
  }
}
</style>
