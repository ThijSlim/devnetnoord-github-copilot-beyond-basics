using System.Net;
using FluentAssertions;
using TechTalk.SpecFlow;

namespace YourNamespace.StepDefinitions
{
    [Binding]
    public class TakeFlightFeatureSteps
    {
        private readonly ScenarioContext _scenarioContext;
        private HttpResponseMessage? _response;
        private readonly HttpClient _client;

        public TakeFlightFeatureSteps(ScenarioContext scenarioContext, HttpClient client)
        {
            _scenarioContext = scenarioContext;
            _client = client;
        }

        [Given(@"I have a flight ready for takeoff with id '(.*)'")]
        public void GivenIHaveAFlightWithId(int id)
        {
            _scenarioContext["FlightId"] = id;
        }

        [When(@"I take a flight with length '(.*)'")]
        public async Task WhenITakeAFlightWithLength(int flightLength)
        {
            _scenarioContext["FlightLength"] = flightLength;
            var flightId = _scenarioContext.Get<int>("FlightId");
            _response = await _client.PostAsync($"/flights/{flightId}/takeFlight/{flightLength}", null);
        }

        [Then(@"the flight should be successful")]
        public void ThenTheFlightShouldBeSuccessfulAndTheRemainingFuelShouldBe()
        {
            _response.StatusCode.Should().Be(HttpStatusCode.OK);
            var responseMessage = _response.Content.ReadAsStringAsync().Result;
            var flightLength = _scenarioContext.Get<int>("FlightLength");
            responseMessage.Should().Be($"Flight took off and flew {flightLength} kilometers/miles.");
        }
    }
}