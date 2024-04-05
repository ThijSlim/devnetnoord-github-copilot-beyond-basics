using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using FluentAssertions;
using TechTalk.SpecFlow;

namespace YourNamespace.StepDefinitions
{
    [Binding]
    public class LightningStrikeFeatureSteps
    {
        private readonly ScenarioContext _scenarioContext;
        private HttpResponseMessage? _response;
        private readonly HttpClient _client;

        public LightningStrikeFeatureSteps(ScenarioContext scenarioContext, HttpClient client)
        {
            _scenarioContext = scenarioContext;
            _client = client;
        }

        [Given(@"I have a flight with id '(.*)'")]
        public void GivenIHaveAFlightWithId(int id)
        {
            _scenarioContext["FlightId"] = id;
        }

        [When(@"the flight is struck by lightning")]
        public async Task WhenTheFlightIsStruckByLightning()
        {
            var flightId = _scenarioContext.Get<int>("FlightId");
            _response = await _client.PostAsync($"/flights/{flightId}/lightningStrike", null);
        }

        [Then(@"the response should be '(.*)'")]
        public void ThenTheResponseShouldBe(string expectedResponse)
        {
            var actualResponse = _response.Content.ReadAsStringAsync().Result;
            actualResponse.Should().Be(expectedResponse);
        }
    }
}