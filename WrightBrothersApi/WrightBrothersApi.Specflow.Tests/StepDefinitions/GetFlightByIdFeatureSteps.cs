using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using FluentAssertions;
using TechTalk.SpecFlow;
using Microsoft.Extensions.Configuration;

namespace YourNamespace.StepDefinitions
{
    [Binding]
    public class GetFlightByIdSteps
    {
        private readonly ScenarioContext _scenarioContext;
        private HttpResponseMessage? _response;
        private readonly HttpClient _client;

        public GetFlightByIdSteps(ScenarioContext scenarioContext, HttpClient client)
        {
            _scenarioContext = scenarioContext;
            _client = client;
        }

        [Given(@"I have the ID (.*) of an existing flight")]
        public void GivenIHaveTheIDOfAnExistingFlight(int flightId)
        {
            _scenarioContext["FlightId"] = flightId;
        }

        [Given(@"I have the ID (.*) for a non-existent flight")]
        public void GivenIHaveTheIDForANon_ExistentFlight(int flightId)
        {
            _scenarioContext["FlightId"] = flightId;
        }

        [When(@"I request flight details by this ID")]
        public async Task WhenIRequestFlightDetailsByThisID()
        {
            var flightId = _scenarioContext.Get<int>("FlightId");
            _response = await _client.GetAsync($"/flights/{flightId}");
        }

        [Then(@"I should receive the flight details")]
        public void ThenIShouldReceiveTheFlightDetails()
        {
            _response.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Then(@"I should receive a not found response")]
        public void ThenIShouldReceiveANotFoundResponse()
        {
            _response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }
    }
}
