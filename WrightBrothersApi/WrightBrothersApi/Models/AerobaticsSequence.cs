using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public class Maneuver
{
    public string Type { get; set; }
    public int RepeatCount { get; set; }
    public char Difficulty { get; set; }
}

public class AerobaticSequence
{
    private List<Maneuver> Maneuvers { get; set; } = new List<Maneuver>();
    public double Difficulty { get; set; }

    public static AerobaticSequence Parse(string signature)
    {
        var sequence = new AerobaticSequence();
        var maneuvers = Regex.Matches(signature, @"([A-Z]\d+[A-E])");

        foreach (Match maneuver in maneuvers)
        {
            var type = maneuver.Value[0].ToString();
            var repeatCount = int.Parse(maneuver.Value.Substring(1, maneuver.Value.Length - 2));
            var difficulty = maneuver.Value[^1];

            sequence.Maneuvers.Add(new Maneuver { Type = type, RepeatCount = repeatCount, Difficulty = difficulty });
        }

        sequence.CalculateDifficulty();
        return sequence;
    }

    private void CalculateDifficulty()
    {
        double difficulty = 0;
        for (int i = 0; i < Maneuvers.Count; i++)
        {
            var multiplier = GetMultiplier(Maneuvers[i].Difficulty);
            var repeatCount = Maneuvers[i].RepeatCount;

            if (i > 0 && (Maneuvers[i - 1].Type == "L" && Maneuvers[i].Type == "R" || Maneuvers[i - 1].Type == "T" && Maneuvers[i].Type == "S"))
            {
                multiplier *= (Maneuvers[i].Type == "R" ? 2 : 3);
            }

            difficulty += repeatCount * multiplier;
        }

        Difficulty = Math.Round(difficulty, 2);
    }

    private double GetMultiplier(char difficulty)
    {
        return difficulty switch
        {
            'A' => 1.0,
            'B' => 1.2,
            'C' => 1.4,
            'D' => 1.6,
            'E' => 1.8,
            _ => throw new ArgumentException("Invalid difficulty"),
        };
    }
}