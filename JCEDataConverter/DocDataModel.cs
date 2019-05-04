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
    }

    public sealed class documentationList
    {
        public string dateGenerated;
        public string type;
        public string notes;
        public document[] documents;
    }
}
