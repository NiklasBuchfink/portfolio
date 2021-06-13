<template>
  <div>
    <Head title="About" description="Hello, I/’m Niklas. Let me tell you a little bit about myself." />
    <r-grid class="aboutGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="aboutTitleContent" span="6" span-s="2+6" span-xs="1-4">
        <h1>
          Who I am
        </h1>
        <p>
          {{aboutpage.headerparagraph}} 
        </p>
      </r-cell>
      <r-cell class="aboutTitleImage" span="8-12" span-s="2+6" span-xs="1-4">
        <ImageTile :image="aboutpage.headerimage"/>
      </r-cell>
      <r-cell class="aboutHowIWorkTitle" span="12" span-s="2+6" span-xs="1-4">
        <h2>
          How I Work
        </h2>
      </r-cell>
      <r-cell class="aboutHowIWorkContent" span="4" span-s="2+5" span-xs="1-3"
        v-for="item in aboutpage.HowIWork" 
        :key="'HomIWork' + item.id"
      >
        <HowIWork
          :subtitle="item.subtitle"
          :text="item.text" 
        />
      </r-cell>
      <r-cell class="aboutTools" span="2+4" span-s="2-4" span-xs="1-4">
         <h3>
          My Design Tools
        </h3>
        <div>
          <span 
            v-for="(item, index) in aboutpage.DesignTools"
            :key="'DesignTools' + item.id"
          >
            <span
              v-if="index == aboutpage.DesignTools.length - 1"
            >
              {{item.name}}
            </span>
            <span
              v-else
            >
              {{item.name}} /
            </span>
          </span>
        </div>
      </r-cell>
      <r-cell class="aboutTools" span="8+4" span-s="5-7" span-xs="1-4">
        <h3>
          My Programming Tools
        </h3>
        <div>
          <span 
            v-for="(item, index) in aboutpage.ProgrammingTools"
            :key="'ProgrammingTools' + item.id"
          >
            <span
              v-if="index == aboutpage.ProgrammingTools.length - 1"
            >
              {{item.name}}
            </span>
            <span
              v-else
            >
              {{item.name}} /
            </span>
          </span>
        </div>
      </r-cell>
      <r-cell class="aboutWorkTitle" span="12" span-s="2+6" span-xs="1-4">
        <h2>
          Work Experience
        </h2>
      </r-cell>
      <r-cell class="aboutWorkExperienceContent" span="12" span-s="8" span-xs="4"
        v-for="item in aboutpage.WorkExperience" 
        :key="'WorkExperience' + item.id"
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
        <h2>
          Education
        </h2>
      </r-cell>
      <r-cell class="aboutEducationContent" span="12" span-s="8" span-xs="4"
        v-for="item in aboutpage.Education" 
        :key="'Education' + item.id"
      >
        <TableItem 
          :title="item.title" 
          :text="item.text"
          :linktext="item.linktext"
          :linkadress="item.linkadress"
          :date="item.date"
        />
      </r-cell>
      <r-cell class="aboutVolunteeringTitle" span="12" span-s="2+6" span-xs="1-4">
        <h2>
          Volunteering
        </h2>
      </r-cell>
      <r-cell class="aboutVolunteeringContent" span="12" span-s="8" span-xs="4"
        v-for="item in aboutpage.Volunteering"
        :key="'Volunteering' + item.id"
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
        <h2>
          Free Time
        </h2>
      </r-cell>
      <r-cell class="aboutFreeTimeContent" span="12" span-s="8" span-xs="4"
        v-for="item in aboutpage.FreeTime"
        :key="'FreeTime' + item.id"
      >
        <r-grid v-if="item.order==1" class="freeTimeGrid" columns="12" columns-s="8" columns-xs="4">
          <r-cell class="freeTimeContent" span="1-4" span-s="2+6" span-xs="1-4">
            <h3>{{item.title}}</h3>
            <p>{{item.text}}</p>
          </r-cell>
          <r-cell class="freeTimeImage" span="6" span-s="2+6" span-xs="1-4">
            <a :href="item.linkadress" target="blank" rel="noopener">
              <ImageTile :image="item.image"/>
            </a>
          </r-cell>
        </r-grid>
        <r-grid v-if="item.order==2" class="freeTimeGrid" columns="12" columns-s="8" columns-xs="4">
          <r-cell class="freeTimeContent" span="3-6" span-s="2+6" span-xs="1-4">
            <h3>{{item.title}}</h3>
            <p>{{item.text}}</p>
          </r-cell>
          <r-cell class="freeTimeImage" span="6" span-s="2+6" span-xs="1-4">
            <a :href="item.linkadress" target="blank" rel="noopener">
              <ImageTile :image="item.image"/>
            </a>
          </r-cell>
        </r-grid>
      </r-cell>
    </r-grid>
  </div>
</template>
<script>
import { aboutpageQuery } from '~/graphql/query'

export default {
  data() {
    return {
      aboutpage: [],
    }
  },
  apollo: {
    aboutpage: {
      prefetch: true,
      query: aboutpageQuery,
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 1rem;
}
h3 {
  margin-bottom: 1rem;
}
p {
  width: clamp(45ch, 75ch);
}
.aboutTitleContent{
  margin-top: 8rem;
  @media screen and (max-width: $max_width_s) {
    margin-bottom: 0rem;
  }
  h1 {
    margin-bottom: 2rem;
  }
  p{
    @include paragraph-large;
  }
}
.aboutTitleImage{
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
.aboutTools{
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
  div{
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
      white-space:nowrap;
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
.freeTimeGrid{
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