import {EntityTradeLogData} from "./trade-log.data";
import {MarkPointOption} from "echarts/types/dist/shared";

export const buyPointMaker = ({buyLogs}: EntityTradeLogData) => {

  return buyLogs.map((buyLog): MarkPointOption => ({
      symbolSize: [35, 35],
      symbolRotate: 180,
      // @ts-ignore
      coord: [...buyLog],
      value: buyLog.at(1),
      itemStyle: {
        color: 'green',
        opacity: 0.85,
      },
      label: {
        offset: [0, 8],
      }
    }),
  );
};