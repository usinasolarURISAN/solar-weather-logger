import './utils/config/environment';
import { CronJob } from 'cron';
import main from './app';

console.log('Starting server...\n\n');

var job = new CronJob('*/5 * * * *', () => {
  main();
  console.log('Starting cron');
});

job.start();
