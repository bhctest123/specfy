import { listTech } from '@specfy/stack-analyser/dist/common/techs.generated';

import type { AllowedKeys, TechItem } from '@specfy/stack-analyser';

import * as icons from './icons';

import type { IconType } from '@icons-pack/react-simple-icons/types';

type Extending = {
  // Icon?: React.LazyExoticComponent<any>;
  Icon?: IconType;
  regHostname?: RegExp;
};
export type TechInfo = Extending & TechItem;

const extending: Partial<Record<AllowedKeys, Extending>> = {
  adobe: { Icon: icons.SiAdobe },
  airbyte: { Icon: icons.SiAirbyte },
  airtable: { Icon: icons.SiAirtable },
  algolia: { Icon: icons.SiAlgolia },
  alibabacloud: { Icon: icons.SiAlibabacloud },
  apache_airflow: { Icon: icons.SiApacheairflow },
  apache_cassandra: { Icon: icons.SiApachecassandra },
  apache_couchdb: { Icon: icons.SiApachecouchdb },
  apache_flink: { Icon: icons.SiApacheflink },
  apache_kafka: { Icon: icons.SiApachekafka },
  apache_spark: { Icon: icons.SiApachespark },
  atlassian: { Icon: icons.SiAtlassian },
  auth0: { Icon: icons.SiAuth0 },
  'aws.amplifyhosting': { Icon: icons.SiAmazonaws },
  'aws.dynamodb': { Icon: icons.SiAmazondynamodb },
  'aws.ec2': { Icon: icons.SiAmazonaws },
  'aws.ecs': { Icon: icons.SiAmazonaws },
  'aws.elasticache': { Icon: icons.SiAmazonaws },
  'aws.fargate': { Icon: icons.SiAmazonaws },
  'aws.glacier': { Icon: icons.SiAmazonaws },
  'aws.lambda': { Icon: icons.SiAmazonaws },
  'aws.rds': { Icon: icons.SiAmazonaws },
  'aws.s3': { Icon: icons.SiAmazonaws },
  'aws.sns': { Icon: icons.SiAmazonaws },
  'aws.sqs': { Icon: icons.SiAmazonaws },
  'aws.apigateway': { Icon: icons.SiAmazonaws },
  'aws.athena': { Icon: icons.SiAmazonaws },
  'aws.cloudformation': { Icon: icons.SiAmazonaws },
  'aws.cloudfront': { Icon: icons.SiAmazonaws },
  'aws.cloudsearch': { Icon: icons.SiAmazonaws },
  'aws.cloudwatch': { Icon: icons.SiAmazonaws },
  'aws.codebuild': { Icon: icons.SiAmazonaws },
  'aws.documentdb': { Icon: icons.SiAmazonaws },
  'aws.ebs': { Icon: icons.SiAmazonaws },
  'aws.ecr': { Icon: icons.SiAmazonaws },
  'aws.efs': { Icon: icons.SiAmazonaws },
  'aws.eks': { Icon: icons.SiAmazonaws },
  'aws.glue': { Icon: icons.SiAmazonaws },
  'aws.kinesis': { Icon: icons.SiAmazonaws },
  'aws.kms': { Icon: icons.SiAmazonaws },
  'aws.lightsail': { Icon: icons.SiAmazonaws },
  'aws.memorydb': { Icon: icons.SiAmazonaws },
  'aws.mq': { Icon: icons.SiAmazonaws },
  'aws.neptune': { Icon: icons.SiAmazonaws },
  'aws.opensearch': { Icon: icons.SiAmazonaws },
  'aws.polly': { Icon: icons.SiAmazonaws },
  'aws.redshift': { Icon: icons.SiAmazonaws },
  'aws.rekognition': { Icon: icons.SiAmazonaws },
  'aws.sagemaker': { Icon: icons.SiAmazonaws },
  'aws.secretsmanager': { Icon: icons.SiAmazonaws },
  'aws.sfn': { Icon: icons.SiAmazonaws },
  'aws.timestream': { Icon: icons.SiAmazonaws },
  'aws.translate': { Icon: icons.SiAmazonaws },
  aws: { Icon: icons.SiAmazonaws, regHostname: /aws.amazon.com$/ },
  'azure.aks': { Icon: icons.SiMicrosoftazure },
  'azure.ci': { Icon: icons.SiMicrosoftazure },
  'azure.cosmosdb': { Icon: icons.SiMicrosoftazure },
  'azure.mariadb': { Icon: icons.SiMicrosoftazure },
  'azure.mysql': { Icon: icons.SiMicrosoftazure },
  'azure.postgres': { Icon: icons.SiMicrosoftazure },
  'azure.redis': { Icon: icons.SiMicrosoftazure },
  'azure.sql': { Icon: icons.SiMicrosoftazure },
  azure: { Icon: icons.SiMicrosoftazure },
  bash: { Icon: icons.SiGnubash },
  bigcommerce: { Icon: icons.SiBigcommerce },
  bitbucket: { Icon: icons.SiBitbucket },
  brevo: { Icon: icons.SiSendinblue },
  c: { Icon: icons.SiC },
  circleci: { Icon: icons.SiCircleci },
  cirrusci: { Icon: icons.SiCirrusci },
  clickhouse: { Icon: icons.SiClickhouse },
  'cloudflare.pages': { Icon: icons.SiCloudflare },
  'cloudflare.workers': { Icon: icons.SiCloudflare },
  cloudflare: { Icon: icons.SiCloudflare },
  codesandboxci: { Icon: icons.SiCodesandbox },
  codecov: { Icon: icons.SiCodecov },
  contenful: { Icon: icons.SiContentful },
  couchbase: { Icon: icons.SiCouchbase },
  cplusplus: { Icon: icons.SiCplusplus },
  crowdin: { Icon: icons.SiCrowdin },
  css: { Icon: icons.SiCss3 },
  cypressci: { Icon: icons.SiCypress },
  dart: { Icon: icons.SiDart },
  databricks: { Icon: icons.SiDatabricks },
  datadog: { Icon: icons.SiDatadog, regHostname: /^(www.)?datadog.com$/ },
  dependabot: { Icon: icons.SiDependabot },
  digitalocean: { Icon: icons.SiDigitalocean },
  discord: { Icon: icons.SiDiscord, regHostname: /^(www.)?discord.gg/ },
  docker: { Icon: icons.SiDocker },
  docusign: { Icon: icons.SiDocusign },
  elasticcloud: { Icon: icons.SiElasticcloud },
  elasticsearch: { Icon: icons.SiElasticsearch },
  elasticstack: { Icon: icons.SiElasticstack },
  elixir: { Icon: icons.SiElixir },
  eslint: { Icon: icons.SiEslint },
  expodev: { Icon: icons.SiExpo },
  facebook: { Icon: icons.SiFacebook },
  figma: { Icon: icons.SiFigma },
  'firebase.firestore': { Icon: icons.SiFirebase },
  firebase: { Icon: icons.SiFirebase },
  'gcp.aiplatform': { Icon: icons.SiGooglecloud },
  'gcp.bigquery': { Icon: icons.SiGooglecloud },
  'gcp.bigtable': { Icon: icons.SiGooglecloud },
  'gcp.cloudbuild': { Icon: icons.SiGooglecloud },
  'gcp.cloudrun': { Icon: icons.SiGooglecloud },
  'gcp.dataflow': { Icon: icons.SiGooglecloud },
  'gcp.dataproc': { Icon: icons.SiGooglecloud },
  'gcp.datastore': { Icon: icons.SiGooglecloud },
  'gcp.dialogflow': { Icon: icons.SiGooglecloud },
  'gcp.dns': { Icon: icons.SiGooglecloud },
  'gcp.functions': { Icon: icons.SiGooglecloud },
  'gcp.gce': { Icon: icons.SiGooglecloud },
  'gcp.gcs': { Icon: icons.SiGooglecloud },
  'gcp.gke': { Icon: icons.SiKubernetes },
  'gcp.kms': { Icon: icons.SiGooglecloud },
  'gcp.language': { Icon: icons.SiGooglecloud },
  'gcp.maps': { Icon: icons.SiGooglecloud },
  'gcp.memorystore': { Icon: icons.SiGooglecloud },
  'gcp.pubsub': { Icon: icons.SiGooglecloud },
  'gcp.secretmanager': { Icon: icons.SiGooglecloud },
  'gcp.spanner': { Icon: icons.SiGooglecloud },
  'gcp.speech': { Icon: icons.SiGooglecloud },
  'gcp.sql': { Icon: icons.SiGooglecloud },
  'gcp.tasks': { Icon: icons.SiGooglecloud },
  'gcp.translate': { Icon: icons.SiGooglecloud },
  'gcp.vision': { Icon: icons.SiGooglecloud },
  'gcp.appengine': { Icon: icons.SiGooglecloud },
  'gcp.artifactregistry': { Icon: icons.SiGooglecloud },
  'gcp.containerregistry': { Icon: icons.SiGooglecloud },
  'gcp.logging': { Icon: icons.SiGooglecloud },
  gcp: { Icon: icons.SiGooglecloud },
  'github.actions': { Icon: icons.SiGithub },
  'github.pages': { Icon: icons.SiGithub },
  github: { Icon: icons.SiGithub, regHostname: /^(www.)?github.com$/ },
  'gitlab.ci': { Icon: icons.SiGitlab },
  gitlab: { Icon: icons.SiGitlab },
  golang: { Icon: icons.SiGo },
  googleanalytics: { Icon: icons.SiGoogleanalytics },
  grafana: { Icon: icons.SiGrafana },
  hashicorp_vault: { Icon: icons.SiVault },
  heroku: { Icon: icons.SiHeroku },
  hotjar: { Icon: icons.SiHotjar },
  html: { Icon: icons.SiHtml5 },
  hubspot: { Icon: icons.SiHubspot },
  influxdb: { Icon: icons.SiInfluxdb },
  javascript: { Icon: icons.SiJavascript },
  jira: { Icon: icons.SiJirasoftware, regHostname: /.atlassian.net$/ },
  kibana: { Icon: icons.SiKibana },
  kotlin: { Icon: icons.SiKotlin },
  kubernetes: { Icon: icons.SiKubernetes },
  mailchimp: { Icon: icons.SiMailchimp },
  mariadb: { Icon: icons.SiMariadb },
  mongodb: { Icon: icons.SiMongodb },
  mongodbatlas: { Icon: icons.SiMongodb },
  mysql: { Icon: icons.SiMysql },
  neo4j: { Icon: icons.SiNeo4j },
  netlify: { Icon: icons.SiNetlify, regHostname: /^(www.)?netlify.com$/ },
  newrelic: { Icon: icons.SiNewrelic },
  nextcloud: { Icon: icons.SiNextcloud },
  nginx: { Icon: icons.SiNginx },
  nodejs: { Icon: icons.SiNodedotjs },
  notion: { Icon: icons.SiNotion },
  okta: { Icon: icons.SiOkta },
  openai: { Icon: icons.SiOpenai },
  oraclecloud: { Icon: icons.SiOracle },
  ovh: { Icon: icons.SiOvh },
  pagerduty: { Icon: icons.SiPagerduty },
  php: { Icon: icons.SiPhp },
  pingdom: { Icon: icons.SiPingdom, regHostname: /^(www.)?pingdom.com$/ },
  planetscale: { Icon: icons.SiPlanetscale },
  platformsh: { Icon: icons.SiPlatformdotsh },
  plausible: { Icon: icons.SiPlausibleanalytics },
  postgresql: { Icon: icons.SiPostgresql },
  postman: { Icon: icons.SiPostman },
  powershell: { Icon: icons.SiPowershell },
  python: { Icon: icons.SiPython },
  rabbitmq: { Icon: icons.SiRabbitmq },
  react: { Icon: icons.SiReact },
  redis: { Icon: icons.SiRedis },
  render: { Icon: icons.SiRender },
  renovate: { Icon: icons.SiRenovatebot },
  replit: { Icon: icons.SiReplit },
  'replit.database': { Icon: icons.SiReplit },
  'replit.postgres': { Icon: icons.SiReplit },
  ruby: { Icon: icons.SiRuby },
  rust: { Icon: icons.SiRust },
  salesforce: { Icon: icons.SiSalesforce },
  scaleway: { Icon: icons.SiScaleway },
  sendgrid: { Icon: icons.SiTwilio },
  sentry: { Icon: icons.SiSentry, regHostname: /^(www.)?sentry.com$/ },
  shopify: { Icon: icons.SiShopify },
  slack: { Icon: icons.SiSlack, regHostname: /^(www.)?slack.com$/ },
  sqlite: { Icon: icons.SiSqlite },
  squarespace: { Icon: icons.SiSquarespace },
  stripe: { Icon: icons.SiStripe },
  'supabase.functions': { Icon: icons.SiSupabase },
  'supabase.postgres': { Icon: icons.SiSupabase },
  'supabase.storage': { Icon: icons.SiSupabase },
  supabase: { Icon: icons.SiSupabase },
  swift: { Icon: icons.SiSwift },
  tailwind: { Icon: icons.SiTailwindcss },
  travisci: { Icon: icons.SiTravisci },
  twilio: { Icon: icons.SiTwilio },
  typescript: { Icon: icons.SiTypescript },
  'upstash.kafka': { Icon: icons.SiUpstash },
  'upstash.qstash': { Icon: icons.SiUpstash },
  'upstash.redis': { Icon: icons.SiUpstash },
  upstash: { Icon: icons.SiUpstash },
  'vercel.ai': { Icon: icons.SiVercel },
  'vercel.analytics': { Icon: icons.SiVercel },
  'vercel.blob': { Icon: icons.SiVercel },
  'vercel.kv': { Icon: icons.SiVercel },
  'vercel.postgres': { Icon: icons.SiVercel },
  vercel: { Icon: icons.SiVercel },
  webflow: { Icon: icons.SiWebflow },
  webpack: { Icon: icons.SiWebpack },
  wordpress: { Icon: icons.SiWordpress },
  zapier: { Icon: icons.SiZapier, regHostname: /^(www.)?zapier.com$/ },
  zendesk: { Icon: icons.SiZendesk },
  zoom: { Icon: icons.SiZoom },
};

export const supportedArray: TechInfo[] = listTech.map((t) => {
  if (t.key in extending) {
    return { ...t, ...extending[t.key] };
  }
  return t;
});

export const supportedIndexed: Record<string, TechInfo> = {};
Object.values(supportedArray).forEach((v) => {
  supportedIndexed[v.key] = v;
});

export const supportedHostname = supportedArray.filter((i) => i.regHostname);
