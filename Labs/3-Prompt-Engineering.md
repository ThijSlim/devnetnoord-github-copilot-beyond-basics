## Prompt Engineering

- Open the `Models/Flight.cs` file.

- Take a look at the `FlightLogSignature` property.

  ```csharp
  public class Flight
  {
      // Other properties
      // ...

      public string FlightLogSignature { get; set; }
  }
  ```

> [!Note]
> Note that the `FlightLogSignature` is a fictional property that is used to demonstrate the capabilities of GitHub Copilot. It is not a real aviation concept.

- Open the Copilot Chat extension and ask the following question:

  ```
  #editor create a c# model for the FlightLogSignature property.

  Example: 17121903-DEP-ARR-WB001

  17th of December 1903
  Departure from Kitty Hawk, NC
  Arrival at Manteo, NC
  Flight number WB001

  ## Technical Requirements
  - Create a FlightLog record type
  - Add a Parse method to the FlightLog record type
  - The Date must be a DateTime.
  - Include usings at the top of the file
  ```

- The prompt contains a few-shot prompting example of a `FlightLogSignature` and a few technical requirements.

- Copilot will suggest a new `FlightLog` record type and a `Parse` method. The `Parse` method splits the string and assigns each part to a corresponding property.

  ```csharp
  using System.Globalization;

  public record FlightLog
  {
      public DateTime Date { get; init; }
      public string Departure { get; init; }
      public string Arrival { get; init; }
      public string FlightNumber { get; init; }

      public static FlightLog Parse(string flightLogSignature)
      {
          var parts = flightLogSignature.Split('-');
          if (parts.Length != 4){
              throw new ArgumentException("Invalid flight log signature format.");
          }

          var dateString = parts[0];
          var date = DateTime.ParseExact(dateString, "ddMMyyyy", CultureInfo.InvariantCulture);

          return new FlightLog
          {
              Date = date,
              Departure = parts[1],
              Arrival = parts[2],
              FlightNumber = parts[3]
          };
      }
  }
  ```

- Add the `FlightLog` property to the `Flight` model, by typing `public Fli`

  ```csharp
  public class Flight
  {
      // Other properties
      // ...

      // Existing property
      public string FlightLogSignature { get; set; }

      // New property
      public Fli <---- Place cursor here
  }
  ```

- Do a HTTP request to the API
