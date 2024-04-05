using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using FluentAssertions;
using TechTalk.SpecFlow;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace WrightBrothersApi.Specflow.Tests
{
    [Binding]
    public class SpecFlowHooks
    {
        private readonly ScenarioContext _scenarioContext;

        public SpecFlowHooks(ScenarioContext scenarioContext)
        {
            _scenarioContext = scenarioContext;
        }

        [BeforeScenario]
        public void BeforeScenario()
        {
            var configuration = new ConfigurationBuilder()
           .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
           .Build();

            var apiSettings = new ApiSettings();
            configuration.GetSection("ApiSettings").Bind(apiSettings);

            var client = new HttpClient
            {
                BaseAddress = new Uri(apiSettings.BaseUri)
            };

            _scenarioContext.ScenarioContainer.RegisterInstanceAs(client);
        }
    }
}