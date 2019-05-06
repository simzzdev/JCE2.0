using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JCEDataConverter
{
    public sealed class document
    {
        public string id;
        public string title;
        //public string dateCreated;
        public string dateModified;
        public string popularity; //Scale 1-5, could be an int?
#warning implement tool to inject popularity ratings

        public override string ToString()
        {
            return this.id + " - " + this.title;
        }
    }

    public sealed class documentationList
    {
        public string name;
        public string dateGenerated;
        public string type;
        public string notes;
        public document[] documents;
    }
}
