import { loadActivities, loadActivityTypes, validateActivityReferences } from './data/loader.js';
import { generateStatistics } from './services/stats-calculator.js';
import { formatStatisticsReport, formatConsoleLog } from './reports/formatter.js';

function main() {
  try {
    console.log('Loading activity data...\n');

    const activities = loadActivities();
    const activityTypes = loadActivityTypes();

    validateActivityReferences(activities, activityTypes);

    console.log(`Loaded ${activities.length} activities`);
    console.log(`Activity types: ${Object.keys(activityTypes).join(', ')}\n`);

    const stats = generateStatistics(activities, activityTypes);

    console.log(formatConsoleLog(stats.groupTotals));

    const report = formatStatisticsReport(stats, activityTypes);
    console.log('\n' + report);

  } catch (error) {
    console.error('Error generating statistics:');
    console.error(error.message);
    process.exit(1);
  }
}

main();
