
<template>
  <div class="charts" :id="id" :ref="id" :style="styles"></div>
</template>

<script>
import { debounce } from "@/utils/utils";
// // 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts'; // 按需引入echarts
// import 'echarts/lib/chart/line'; // 引入折线charts
// import 'echarts/lib/chart/bar'; // 引入折线charts
// import 'echarts/lib/component/title'; // 控制标题
// import 'echarts/lib/component/tooltip'; // 提示框组件
// import 'echarts/lib/component/axis'; // 控制横纵坐标的
// import 'echarts/lib/component/dataZoom'; // 控制缩放
// import 'echarts/lib/component/legend'; // 图例

export default {
  name: "MChart",

  props: {
    id: {
      type: String,
      require: true
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    options: {
      type: Object,
      require: true,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      myChart: null
    };
  },

  watch: {
    options: {
      handler() {
        this.$nextTick(() => {
          this.setOptions();
        });
      },
      deep: true
    }
  },

  computed: {
    styles() {
      return {
        width: this.width,
        height: this.height
      };
    }
  },
  

  mounted() {
    this.initChart();
 
    window.onresize = debounce(() => {
      this.resizeHandle();
    }, 300);
    document.addEventListener("click", this.chartToolTipHide);
  },

  methods: {
    // 初始化实例
    initChart() {
      console.log('initChart')
      if (!this.myChart)
        this.myChart = echarts.init(document.getElementById(this.id));
      this.setOptions();
    },
    // 更新配置
    setOptions() {
      if (this.myChart) {
        this.myChart.clear();
        this.myChart.setOption(this.options);
      }
    },
    // resize
    resizeHandle() {
      if (this.myChart) this.myChart.resize();
    },
    chartToolTipHide() {
      this.myChart.dispatchAction({
          type: 'hideTip'
      })
    }
  },

  beforeDestroy() {
    this.myChart = null;
    window.onresize = null;
    
    document.removeEventListener("click", this.chartToolTipHide);
  }
};
</script>

<style lang="less" scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>
