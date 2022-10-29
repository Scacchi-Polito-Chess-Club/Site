using System;
using System.IO;
using System.Collections;

public class Program
{
    public static void Main(string[] args)
    {
        string[] fileEntries = Directory.GetFiles(args[0]);
        string fileContent = String.Empty;

        foreach (string file in fileEntries)
        {
            int idx = file.LastIndexOf('.');

            if (args[2] == "true" && file[(idx + 1)..] != "jpg")
            {
                string newFile = file;
                newFile = newFile.Replace(file[(idx + 1)..], "jpg");

                File.Move(file, newFile);
                newFile = newFile.Replace("\\", "/");
                fileContent += "\"url(" + newFile + ")\",\n";
                continue;
            }

            fileContent += "\"url(" + file.Replace("\\", "/") + ")\",\n";
        }

        fileContent = fileContent.Replace("..", ".");

        using (StreamWriter sw = new StreamWriter(args[1]))
        {
            sw.Write(fileContent);
        }
    }
}