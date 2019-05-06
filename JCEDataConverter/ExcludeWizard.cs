using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace JCEDataConverter
{
    public partial class ExcludeWizard : Form
    {
        public string excludeCodes = "";
        public List<document> docs;
        public event EventHandler dataReturned;

        public ExcludeWizard()
        {
            InitializeComponent();
        }

        public ExcludeWizard(List<document> docs, string codes)
        {
            InitializeComponent();
            this.docs = docs;
            this.excludeCodes = codes;
        }
        
        private string ListToString(List<string> l)
        {
            string returnVal = "";
            for (int i = 0; i < l.Count; i++)
            {
                returnVal += l[i];
                if (i != l.Count - 1)
                    returnVal += ",";
            }
            return returnVal;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            List<string> newCodes = new List<string>();
            for (int i = 0; i < checkedListBox1.Items.Count; i++)
            {
                if (checkedListBox1.GetItemChecked(i))
                    newCodes.Add(docs[i].id);
            }
            if (dataReturned != null)
                dataReturned(ListToString(newCodes), new EventArgs());
            this.Close();
        }

        private bool keyMatch(string s)
        {
            s = s.ToLower();
            bool found = false;
            string[] keys = { "copy of answer", "en español", "(fr ca)", "(fr-ca)", "mobile pour / distribution de", "lanzamiento móvil", "release van", "lancement", "(fr_ca)", "(french canadian)", "qué hay de nuevo", "notas de publicación" };
            foreach (string k in keys)
            {
                if (s.Contains(k))
                {
                    found = true;
                    break;
                }
            }
            return found;
        }

        private void ExcludeWizard_Load(object sender, EventArgs e)
        {
            bool removePresets = MessageBox.Show("Remove Presets?", "Remove the default items?", MessageBoxButtons.OKCancel) == DialogResult.OK;
            string[] codes = excludeCodes.Split(',');
            for (int i = 0; i < docs.Count; i++)
            {
                checkedListBox1.Items.Add(docs[i]);
                if (codes.Contains(docs[i].id))
                    checkedListBox1.SetItemChecked(i, true);
                if (removePresets && keyMatch(docs[i].title))
                {
                    checkedListBox1.SetItemChecked(i, true);
                }
            }
        }
    }
}
