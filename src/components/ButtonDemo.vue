<template>
  <br/>
  <h2>Button 按钮</h2>
  <br/>

  <Demo :component="Button1Demo"/>
  <Demo :component="Button2Demo"/>
  <Demo :component="Button4Demo"/>
  <Demo :component="Button5Demo"/>

  <section class="table-css">
    <table>
      <h2>参数说明</h2>
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>theme</td>
        <td>按钮的类型</td>
        <td>String</td>
        <td>button、main、success、warning、danger</td>
        <td>button</td>
      </tr>
      <tr>
        <td>size</td>
        <td>按钮尺寸</td>
        <td>String</td>
        <td>big、normal、small</td>
        <td>normal</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用按钮</td>
        <td>Boolean</td>
        <td>true、false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>按钮是否载入中</td>
        <td>Boolean</td>
        <td>true、false</td>
        <td>false</td>
      </tr>
      </tbody>

    </table>
  </section>
</template>
<script lang="ts">
  import Demo from './Demo.vue';
  import Button1Demo from '../apply/button/Button1.demo.vue';
  import Button2Demo from '../apply/button/Button2.demo.vue';
  import Button4Demo from '../apply/button/Button4.demo.vue';
  import Button5Demo from '../apply/button/Button5.demo.vue';

  export default {
    components: {
      Demo,
    },
    setup() {
      return {Button1Demo, Button2Demo, Button4Demo, Button5Demo};
    },
  };
</script>
<style lang="scss">
  .table-css{
    > table{
      font-size: 16px;
      border-collapse: collapse;
      tr{
        border-bottom: 1px solid #dcdfe6;
      }
      th, td {
        text-align: left;
        font-weight: normal;
        padding: 8px 16px;
      }
      th{
        color: #9d93a5;
      }
      td{
        color: #646266;
      }
    }
  }
  @media (max-width: 500px){
    .table-css{
      display: none;
    }
  }
</style>