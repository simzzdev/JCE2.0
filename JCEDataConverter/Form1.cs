using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml;

namespace JCEDataConverter
{
    public partial class Form1 : Form
    {
        List<document> importedDocs = new List<document>();
        OpenFileDialog openDialog = new OpenFileDialog();
        public Form1()
        {
            InitializeComponent();
        }

        private void inputFileBtn_Click(object sender, EventArgs e)
        {
            openDialog.Filter = "XML Files|*.xml";
            openDialog.FileOk += F_FileOk;
            openDialog.ShowDialog();
        }

        private void F_FileOk(object sender, CancelEventArgs e)
        {
            inputFileStatusLabel.Text = openDialog.FileName;
            //
            XmlDocument x = new XmlDocument();
            using (StreamReader s = new StreamReader(openDialog.OpenFile()))
            {
                string stringXML = s.ReadToEnd();
                x.LoadXml(stringXML);
                XmlNodeList rows = x.GetElementsByTagName("Row");
                for (int i = 0; i < rows.Count; i++)
                {
                    if (rows.Count >= 2)
                    {
                        string currId = rows[i].ChildNodes[0].InnerText;
                        string currTitle = rows[i].ChildNodes[1].InnerText;
                        document d = new document();
                        d.id = currId;
                        d.title = currTitle;
                        importedDocs.Add(d);
                    }
                    else
                    {
                        MessageBox.Show("There's an issue with the file.");
                    }
                }
            }
        }

        private void codeWizardBtn_Click(object sender, EventArgs e)
        {
            //Not yet implemented
        }

        private List<document> RemoveDocuments(string[] docs)
        {
            List<document> newList = importedDocs;
            for (int i = 0; i < newList.Count; i++)
            {
                for (int y = 0; y < docs.Length; y++)
                {
                    if (newList[i].id == docs[y])
                    {
                        newList.RemoveAt(i);
                        i--;
                        break;
                    }
                }
            }
            return newList;
        }

        private string generateJson()
        {
            List<document> docs = importedDocs;
            if (removeDocsByCodeCheckbox.Checked)
            {
                docs = RemoveDocuments(codeToRemoveTextBox.Text.Split(','));
            }
            //
            if (docs.Count > 0)
            {
                //Prepare docList file
                documentationList docList = new documentationList();
                docList.dateGenerated = DateTime.Now.ToShortDateString();
                docList.notes = listNotesTextBox.Text;
                docList.type = productionRadioButton.Checked ? "prod" : "test";
                docList.documents = docs.ToArray();
                string txt = JsonConvert.SerializeObject(docList);
                return txt;
            }
            else
            {
                MessageBox.Show("Nothing has been imported yet.");
                return null;
            }
        }

        private void SaveFile(string fileContents, bool isJS)
        {
            SaveFileDialog d = new SaveFileDialog();
            if (isJS)
            {
                d.FileName = "loadData.js";
                d.Filter = "JavaScript File|*.js";
            }
            else
                d.Filter = "JSON File|*.json";
            d.FileOk += (object sender, CancelEventArgs e) =>
                {
                    using (Stream fs = d.OpenFile())
                    {
                        StreamWriter sw = new StreamWriter(fs);
                        sw.Write(fileContents);
                    }
                };
            d.ShowDialog();
        }

        private void generateJSBtn_Click(object sender, EventArgs e)
        {
            string json = generateJson();
            string js =
                "var jsonStr = `"
                + json
                + "`; var docsData = JSON.parse(jsonStr);";
            SaveFile(js, true);
        }

        private void generateJsonBtn_Click(object sender, EventArgs e)
        {
            string json = generateJson();
            SaveFile(json, false);
        }

        private void removeDocsByCodeCheckbox_CheckedChanged(object sender, EventArgs e)
        {
            codeToRemoveTextBox.Enabled = removeDocsByCodeCheckbox.Checked;
            codeWizardBtn.Enabled = removeDocsByCodeCheckbox.Checked;
        }
    }
}
