<template>
  <div class>
    <r-grid class="tableGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="tableTitle" span="2-6" span-s="4-7" span-xs="1-4">
        <p>{{title}}</p>
      </r-cell>
      <r-cell class="tableLink" span="7-10" span-s="4-7" span-xs="1-4">
        <a :href="linkadress" target="blank" rel="noopener noreferrer" >
          <span>@{{linktext}}</span>
        </a>
      </r-cell>
      <r-cell class="tableDate" span="11-13" span-s="2-3" order-s="-2" span-xs="1-4">
        <p>{{date}}</p>
      </r-cell>
      <r-cell class="tableText" span="2-6" span-s="4-7" span-xs="1-4">
        <p>{{text}}</p>
      </r-cell>
    </r-grid>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mobile: false,
    }
  },
  props:
  [
    'title',
    'text',
    'linktext',
    'linkadress',
    'date',
  ],
}
</script>

<style lang="scss" scoped>
.tableGrid {
  margin-bottom: 2rem;
  a :hover{
    text-decoration: underline;
  }
  .tableTitle {
    font-weight: 600;
    white-space: nowrap;
    @media screen and (max-width: $max_width_xs) {
      white-space: normal;
    }
  }
  .tableLink { 
    color: $color-gray;   
    @media screen and (max-width: $max_width_s) {
      padding-bottom: 0.5rem;
      text-decoration: underline;
    }
  }
  .tableText {
    p {
      width: 95%;
      @media screen and (max-width: $max_width_s) {
        width: 100%;
      }
      @media screen and (max-width: $max_width_xs) {
        width: 90%;
      }
    }
  }
  .tableDate {
    white-space: nowrap;
    text-align: right;
    color: $color-gray;   
    @media screen and (max-width: $max_width_s) {
      text-align: left;
    }
    @media screen and (max-width: $max_width_xs) {
      padding-bottom: 0.5rem;
    }
  }
}
</style>