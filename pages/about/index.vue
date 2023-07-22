<template>
  <div>
    <Head
      title="About"
      description="Hello, I’m Niklas. Let me tell you a little bit about myself."
    />
    <r-grid class="aboutGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="aboutTitleContent" span="6" span-s="2+6" span-xs="1-4">
        <h1>Who I am</h1>
        <p>
          {{ aboutpage.headerparagraph }}
        </p>
      </r-cell>
      <r-cell class="aboutTitleImage" span="8-12" span-s="2+6" span-xs="1-4">
        <ImageTile :image="aboutpage.headerimage" />
      </r-cell>
      <r-cell class="aboutHowIWorkTitle" span="12" span-s="2+6" span-xs="1-4">
        <h2>How I Work</h2>
      </r-cell>
      <r-cell
        v-for="item in aboutpage.HowIWork"
        :key="'HomIWork' + item.id"
        class="aboutHowIWorkContent"
        span="4"
        span-s="2+5"
        span-xs="1-3"
      >
        <HowIWork :subtitle="item.subtitle" :text="item.text" />
      </r-cell>
      <r-cell class="aboutWorkTitle" span="12" span-s="2+6" span-xs="1-4">
        <h2>Work Experience</h2>
      </r-cell>
      <r-cell
        v-for="item in aboutpage.WorkExperience"
        :key="'WorkExperience' + item.id"
        class="aboutWorkExperienceContent"
        span="12"
        span-s="8"
        span-xs="4"
      >
        <TableItem
          :title="item.title"
          :text="item.text"
          :linktext="item.linktext"
          :linkadress="item.linkadress"
          :date="item.date"
        />
      </r-cell>
      <r-cell class="aboutEducationTitle" span="12" span-s="2+6" span-xs="1-4">
        <h2>Education</h2>
      </r-cell>
      <r-cell
        v-for="item in aboutpage.Education"
        :key="'Education' + item.id"
        class="aboutEducationContent"
        span="12"
        span-s="8"
        span-xs="4"
      >
        <TableItem
          :title="item.title"
          :text="item.text"
          :linktext="item.linktext"
          :linkadress="item.linkadress"
          :date="item.date"
        />
      </r-cell>
      <r-cell class="aboutFreeTimeTitle" span="12" span-s="2+6" span-xs="1-4">
        <h2>Free Time</h2>
      </r-cell>
      <r-cell
        v-for="item in aboutpage.FreeTime"
        :key="'FreeTime' + item.id"
        class="aboutFreeTimeContent"
        span="12"
        span-s="8"
        span-xs="4"
      >
        <r-grid
          v-if="item.order == 1"
          class="freeTimeGrid"
          columns="12"
          columns-s="8"
          columns-xs="4"
        >
          <r-cell class="freeTimeContent" span="1-4" span-s="2+6" span-xs="1-4">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </r-cell>
          <r-cell class="freeTimeImage" span="6" span-s="2+6" span-xs="1-4">
            <a
              :href="item.linkadress"
              target="blank"
              rel="noopener noreferrer"
              :aria-label="item.image.alternativeText"
            >
              <ImageTile :image="item.image" />
            </a>
          </r-cell>
        </r-grid>
        <r-grid
          v-if="item.order == 2"
          class="freeTimeGrid"
          columns="12"
          columns-s="8"
          columns-xs="4"
        >
          <r-cell class="freeTimeContent" span="3-6" span-s="2+6" span-xs="1-4">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </r-cell>
          <r-cell class="freeTimeImage" span="6" span-s="2+6" span-xs="1-4">
            <a
              :href="item.linkadress"
              target="blank"
              rel="noopener noreferrer"
              :aria-label="item.image.alternativeText"
            >
              <ImageTile :image="item.image" />
            </a>
          </r-cell>
        </r-grid>
      </r-cell>
    </r-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aboutpage: {
        headerparagraph: `I'm Niklas Buchfink, a designer and engineer who focuses his skills on creating enjoyable and meaningful user experiences. Design for me is the opportunity to solve problems and create a better future. It's not about the product or service itself, but about the impact it evokes.`,
        headerimage: {
          alternativeText: 'Me at the beach',
          url: 'https://res.cloudinary.com/niklasbuchfink/image/upload/v1623755630/medium_headerimage_flip_a4ec5fbdfe.jpg',
        },
        HowIWork: [
          {
            id: 1,
            subtitle: '1 | See the bigger picture',
            text: 'Deep understanding of the problem and the people behind it.',
          },
          {
            id: 2,
            subtitle: '2 | Design solutions',
            text: 'Using the design thinking process, methods and rapid iteration to find the best solution.',
          },
          {
            id: 3,
            subtitle: '3 | Make them tangible',
            text: 'Prototype the unbelievable part to experience it and validate the idea.',
          },
        ],
        WorkExperience: [
          {
            id: 6,
            title: 'Design Engineer',
            text: 'Development of a transmission sound generator, a sound-light visualization, programming of a dynamic driving sound for electric cars and the implementation of the control logic of an acoustic comfort function.',
            linktext: 'inlang GmbH',
            linkadress: 'https://www.inlang.com/',
            date: 'Mar. 2023 - Today',
          },
          {
            id: 5,
            title: 'UX Designer & Web Developer',
            text: 'Stage is an API-based portfolio generator for developers. The project is also part of my bachelor thesis in Interaction Design. My task is to develop the UX concept and support the app development.',
            linktext: 'Stage',
            linkadress: 'https://getstage.app/',
            date: 'Oct. 2022 - Apr. 2023',
          },
          {
            id: 4,
            title: 'Design Intern in Design & Web Development',
            text: 'Internship in user experience design and user interface design as well as some programming tasks for web development.',
            linktext: 'Eatch Interactive GmbH',
            linkadress: 'https://www.eatch.com/',
            date: 'Aug. 2021 - Jan. 2022',
          },
          {
            id: 3,
            title: 'Student thesis supervisor',
            text: 'During my first studies I started to develop an analog synthesizer. This project was continued by students and supervised by me',
            linktext: 'DHBW Ravensburg',
            linkadress: 'https://www.ravensburg.dhbw.de/',
            date: 'Oct. 2019 - June 2020',
          },
          {
            id: 2,
            title: 'Working Student in Software Development',
            text: 'Programming of a script application for the automation of software test containers.',
            linktext: 'Robert Bosch Automotive Steering',
            linkadress: 'https://www.bosch.com/',
            date: 'Nov. 2019 - Apr. 2020',
          },
          {
            id: 1,
            title: 'Dual Student in Electrical Engineering',
            text: 'Development of a transmission sound generator, a sound-light visualization, programming of a dynamic driving sound for electric cars and the implementation of the control logic of an acoustic comfort function.',
            linktext: 'Daimler AG',
            linkadress: 'https://www.daimler.com/',
            date: 'Oct. 2016 - Sept. 2019',
          },
        ],
        Education: [
          {
            id: '3',
            title: 'Digital Ideation (B.A.)',
            text: 'Exchange semester focused on contemporary and future-oriented design education in the field of information technology.',
            linktext: 'HSLU Hochschule Luzern',
            linkadress: 'https://www.hslu.ch/',
            date: 'Feb. 2022 - July 2022',
          },
          {
            id: '2',
            title: 'Interaction Design (B.A.)',
            text: 'The degree program combines user experience design, interface design, and interaction design. The methods of human centered design and design thinking are taught and applied in semester projects.',
            linktext: 'HfG Schwäbisch Gmünd',
            linkadress: 'https://www.hfg-gmuend.de/',
            date: 'Oct. 2019 - Feb. 2023',
          },
          {
            id: '1',
            title: 'Electrical Engineering (B.Eng.)',
            text: 'The dual study program includes theoretical content at the university, which was then applied in practical semesters at my partner company Daimler AG. The focus is on electromobility, mechatronic systems and diagnostics.',
            linktext: 'DHBW Ravensburg',
            linkadress: 'https://www.ravensburg.dhbw.de/',
            date: 'Oct. 2016 - Oct. 2019',
          },
        ],
        FreeTime: [
          {
            id: 1,
            image: {
              url: 'https://res.cloudinary.com/niklasbuchfink/image/upload/v1623755577/medium_Feuerzangenbowle_0b79081831.jpg',
              alternativeText: 'Me deejaying with turntables',
            },
            title: 'Music Everywhere',
            text: `Music plays a big role in my life. Since 2016 I'm a vinyl deejay and it fulfills me to make people dance with different music styles. I also have a small home studio and taught myself how to play guitar. The feeling of experiencing music at festivals, open airs and clubs and dancing to it with friends is one of the best.`,
            linkadress:
              'https://www.mixcloud.com/NiklasBuchfink/winter-grooves/',
            order: 1,
          },
          {
            id: 2,
            image: {
              url: 'https://res.cloudinary.com/niklasbuchfink/image/upload/v1623755603/medium_02_Morgen_8bb04225b9.jpg',
              alternativeText: 'Forest trail in morning light',
            },
            title: 'Daily Nature',
            text: `I love being out in nature, whether it's at the beach, lake, forest or mountains. It's fun to go on walks and hikes to explore new trails or do other outdoor activities like jogging, longboarding, mountain biking, swimming, canoeing and skiing. On vacation I also enjoy camping with friends in different places.`,
            linkadress:
              'https://ausstellung.hfg-gmuend.de/w-2021/projekte/einnehmend',
            order: 2,
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
h3 {
  margin-bottom: 1rem;
}
p {
  //width: clamp(45ch, 75ch);
}
.aboutTitleContent {
  margin-top: 8rem;
  @media screen and (max-width: $max_width_s) {
    margin-bottom: 0rem;
  }
  h1 {
    margin-bottom: 2rem;
  }
  p {
    @include paragraph-large;
  }
}
.aboutTitleImage {
  margin-top: 8rem;
  width: 100%;
  max-height: 20rem;
  height: 25vw;
  @media screen and (max-width: $max_width_s) {
    margin-top: 4rem;
    max-height: 28rem;
    height: 50vw;
  }
  @media screen and (max-width: $max_width_xs) {
    height: 60vw;
  }
}
.aboutTools {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  @media screen and (max-width: $max_width_s) {
    margin-top: 2rem;
  }
  h3 {
    text-align: center;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: $max_width_xs) {
      width: 60vw;
    }
    span {
      @include paragraph-large;
      color: $color-gray;
      white-space: nowrap;
      padding-right: 0.15rem;
      height: $line-height-h3;
    }
  }
}
.aboutHowIWorkTitle {
  margin-top: 4rem;
}
.aboutWorkTitle {
  margin-top: 4rem;
}
.aboutFreeTimeTitle {
  margin-top: 2rem;
}
.freeTimeGrid {
  margin-bottom: 4rem;
  p {
    width: 90%;
  }
  .freeTimeContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .freeTimeImage {
    max-height: 20rem;
    height: 25vw;
    transition: 0.3s;
    @media screen and (max-width: $max_width_s) {
      margin-top: 2rem;
      max-height: 28rem;
      height: 50vw;
    }
    @media screen and (max-width: $max_width_xs) {
      height: 60vw;
    }
  }
  .freeTimeImage:hover {
    opacity: 0.9;
  }
}
</style>
