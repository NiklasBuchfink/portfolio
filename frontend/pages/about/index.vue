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
      <r-cell class="aboutHowIWorkContent" span="4" span-s="2+6" span-xs="4"
        v-for="(item, index) in aboutpage.HowIWork" 
        :key="item.id"
      >
        <div v-if="index==0" class="HowIWorkOne">
          <HowIWork
            :subtitle="item.subtitle"
            :text="item.text" 
          />
        </div>
        <div v-else-if="index==1" class="HowIWorkTwo">
          <HowIWork
            :subtitle="item.subtitle"
            :text="item.text" 
          />
        </div>
        <div v-else-if="index==2" class="HowIWorkThree">
          <HowIWork
            :subtitle="item.subtitle"
            :text="item.text" 
          />
        </div>
      </r-cell>
      <r-cell class="aboutTools" span="2+4" span-s="8" span-xs="4">
         <h3>
          My Design Tools
        </h3>
        <div>
          <span 
            v-for="(item, index) in aboutpage.DesignTools"
            :key="item.id"
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
      <r-cell class="aboutTools" span="8+4" span-s="4" span-xs="2-4">
        <h3>
          My Programming Tools
        </h3>
        <div>
          <span 
            v-for="(item, index) in aboutpage.ProgrammingTools"
            :key="item.id"
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
        v-for="item in aboutpage.WorkExperience" :key="item.id"
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
        :key="item.id"
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
        v-for="item in aboutpage.Volunteering" :key="item.id"
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
      <r-cell class="aboutVolunteeringContent" span="12" span-s="8" span-xs="4"
        v-for="item in aboutpage.FreeTime"
        :key="item.id"
      >
        <r-grid v-if="item.order==1" class="freeTimeGrid" columns="12" columns-s="8" columns-xs="4">
          <r-cell class="freeTimeContent" span="1-4" span-s="2+6" span-xs="1-4">
            <h3>{{item.title}}</h3>
            <p>{{item.text}}</p>
          </r-cell>
          <r-cell class="freeTimeImage" span="6" span-s="2+6" span-xs="1-4">
            <a :href="item.linkadress" target="blank">
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
            <a :href="item.linkadress" target="blank">
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
  margin-bottom: 2rem;
}
h3 {
  margin-bottom: 1rem;
}
.aboutTitleContent{
  margin-top: 8rem;
  margin-bottom: 8rem;
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
  height: 20rem;
  @media screen and (max-width: $max_width_s) {
    margin-top: 4rem;
  }
}
.aboutHowIWorkContent{
  .HowIWorkOne{
    padding-right: 1rem;
  }
  .HowIWorkTwo{
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .HowIWorkThree{
    padding-left: 1rem;
  }
}
.aboutTools{
  margin-top: 6rem;
  margin-bottom: 2rem;
  h3 {
    text-align: center;
  }
  div{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    span {
      @include paragraph-large;
      color: $color-gray;
      white-space:nowrap;
      padding-right: 0.15rem;
      height: $line-height-h3;
    }
  }
}
.aboutWorkTitle {
  margin-top: 4rem;
}
.aboutFreeTimeTitle {
  margin-top: 4rem;
}
.freeTimeGrid{
  height: 24rem;
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
    height: 100%;
  }
}
</style>