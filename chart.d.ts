import { ChartTypeRegistry } from 'chart.js'

declare module 'chart.js' {
    interface ChartTypeRegistry {
        derivedBubble: ChartTypeRegistry['bubble']
    }
}
