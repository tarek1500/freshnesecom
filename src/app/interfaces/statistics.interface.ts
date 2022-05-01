import { Statistic } from './statistic.interface';

export interface Statistics {
	title: string,
	description: string,
	image: string,
	statistics: Statistic[]
}
