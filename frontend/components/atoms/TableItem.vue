<template>
  <div>
    <r-grid class="tableGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="tableTopic" span="2-5">
        <h4>{{title}} |</h4>
        <p>{{text}}</p>
      </r-cell>
      <r-cell class="tableLink" span="7-9">
        <a :href="linkadress" target="blank">
          <p>@{{linktext}}</p>
        </a>
      </r-cell>
      <r-cell class="tableDate" span="11-13">
        <p>{{date}}</p>
      </r-cell>
    </r-grid>
  </div>
</template>

<script>
export default {
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
a :hover{
  color: $color-gray;
  text-decoration: underline;
  text-decoration-color: $color-gray;
}
.tableGrid {
  margin-bottom: 2rem;
  .tableDate {
    text-align: right;
  }
}
</style>