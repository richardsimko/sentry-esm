import module from './module.js';
import Sentry from '@sentry/node';

Sentry.init();

module();
