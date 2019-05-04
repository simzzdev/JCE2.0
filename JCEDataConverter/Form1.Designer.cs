namespace JCEDataConverter
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.inputFileBtn = new System.Windows.Forms.Button();
            this.inputFileStatusLabel = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.removeDocsByCodeCheckbox = new System.Windows.Forms.CheckBox();
            this.codeWizardBtn = new System.Windows.Forms.Button();
            this.listNameTextBox = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.listNotesTextBox = new System.Windows.Forms.TextBox();
            this.codeToRemoveTextBox = new System.Windows.Forms.TextBox();
            this.productionRadioButton = new System.Windows.Forms.RadioButton();
            this.radioButton2 = new System.Windows.Forms.RadioButton();
            this.generateJSBtn = new System.Windows.Forms.Button();
            this.generateJsonBtn = new System.Windows.Forms.Button();
            this.label7 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(12, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(411, 29);
            this.label1.TabIndex = 0;
            this.label1.Text = "JCE Docs List Data File Generator";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(12, 62);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(253, 25);
            this.label2.TabIndex = 1;
            this.label2.Text = "Step 1: Choose Source File";
            // 
            // inputFileBtn
            // 
            this.inputFileBtn.Location = new System.Drawing.Point(17, 95);
            this.inputFileBtn.Name = "inputFileBtn";
            this.inputFileBtn.Size = new System.Drawing.Size(75, 23);
            this.inputFileBtn.TabIndex = 2;
            this.inputFileBtn.Text = "Browse";
            this.inputFileBtn.UseVisualStyleBackColor = true;
            this.inputFileBtn.Click += new System.EventHandler(this.inputFileBtn_Click);
            // 
            // inputFileStatusLabel
            // 
            this.inputFileStatusLabel.AutoSize = true;
            this.inputFileStatusLabel.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.inputFileStatusLabel.Location = new System.Drawing.Point(98, 96);
            this.inputFileStatusLabel.Name = "inputFileStatusLabel";
            this.inputFileStatusLabel.Size = new System.Drawing.Size(116, 18);
            this.inputFileStatusLabel.TabIndex = 3;
            this.inputFileStatusLabel.Text = "No File Selected";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(12, 138);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(214, 25);
            this.label3.TabIndex = 4;
            this.label3.Text = "Step 2: Doc List Details";
            // 
            // removeDocsByCodeCheckbox
            // 
            this.removeDocsByCodeCheckbox.AutoSize = true;
            this.removeDocsByCodeCheckbox.Location = new System.Drawing.Point(17, 167);
            this.removeDocsByCodeCheckbox.Name = "removeDocsByCodeCheckbox";
            this.removeDocsByCodeCheckbox.Size = new System.Drawing.Size(354, 21);
            this.removeDocsByCodeCheckbox.TabIndex = 5;
            this.removeDocsByCodeCheckbox.Text = "Remove Documents By Code (Separate by comma)";
            this.removeDocsByCodeCheckbox.UseVisualStyleBackColor = true;
            this.removeDocsByCodeCheckbox.CheckedChanged += new System.EventHandler(this.removeDocsByCodeCheckbox_CheckedChanged);
            // 
            // codeWizardBtn
            // 
            this.codeWizardBtn.Location = new System.Drawing.Point(220, 194);
            this.codeWizardBtn.Name = "codeWizardBtn";
            this.codeWizardBtn.Size = new System.Drawing.Size(110, 23);
            this.codeWizardBtn.TabIndex = 6;
            this.codeWizardBtn.Text = "Code Wizard";
            this.codeWizardBtn.UseVisualStyleBackColor = true;
            this.codeWizardBtn.Click += new System.EventHandler(this.codeWizardBtn_Click);
            // 
            // listNameTextBox
            // 
            this.listNameTextBox.Location = new System.Drawing.Point(17, 249);
            this.listNameTextBox.Name = "listNameTextBox";
            this.listNameTextBox.Size = new System.Drawing.Size(197, 22);
            this.listNameTextBox.TabIndex = 7;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(14, 229);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(71, 17);
            this.label4.TabIndex = 8;
            this.label4.Text = "List Name";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.Location = new System.Drawing.Point(14, 282);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(66, 17);
            this.label5.TabIndex = 10;
            this.label5.Text = "List Type";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Microsoft Sans Serif", 8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.Location = new System.Drawing.Point(14, 337);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(71, 17);
            this.label6.TabIndex = 12;
            this.label6.Text = "List Notes";
            // 
            // listNotesTextBox
            // 
            this.listNotesTextBox.Location = new System.Drawing.Point(17, 357);
            this.listNotesTextBox.Multiline = true;
            this.listNotesTextBox.Name = "listNotesTextBox";
            this.listNotesTextBox.Size = new System.Drawing.Size(197, 56);
            this.listNotesTextBox.TabIndex = 11;
            // 
            // codeToRemoveTextBox
            // 
            this.codeToRemoveTextBox.Location = new System.Drawing.Point(17, 194);
            this.codeToRemoveTextBox.Name = "codeToRemoveTextBox";
            this.codeToRemoveTextBox.Size = new System.Drawing.Size(197, 22);
            this.codeToRemoveTextBox.TabIndex = 13;
            // 
            // productionRadioButton
            // 
            this.productionRadioButton.AutoSize = true;
            this.productionRadioButton.Checked = true;
            this.productionRadioButton.Location = new System.Drawing.Point(17, 303);
            this.productionRadioButton.Name = "productionRadioButton";
            this.productionRadioButton.Size = new System.Drawing.Size(97, 21);
            this.productionRadioButton.TabIndex = 14;
            this.productionRadioButton.TabStop = true;
            this.productionRadioButton.Text = "Production";
            this.productionRadioButton.UseVisualStyleBackColor = true;
            // 
            // radioButton2
            // 
            this.radioButton2.AutoSize = true;
            this.radioButton2.Location = new System.Drawing.Point(117, 303);
            this.radioButton2.Name = "radioButton2";
            this.radioButton2.Size = new System.Drawing.Size(57, 21);
            this.radioButton2.TabIndex = 15;
            this.radioButton2.Text = "Test";
            this.radioButton2.UseVisualStyleBackColor = true;
            // 
            // generateJSBtn
            // 
            this.generateJSBtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 7.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.generateJSBtn.Location = new System.Drawing.Point(17, 472);
            this.generateJSBtn.Name = "generateJSBtn";
            this.generateJSBtn.Size = new System.Drawing.Size(313, 35);
            this.generateJSBtn.TabIndex = 16;
            this.generateJSBtn.Text = "Generate JS (Reccomended)";
            this.generateJSBtn.UseVisualStyleBackColor = true;
            this.generateJSBtn.Click += new System.EventHandler(this.generateJSBtn_Click);
            // 
            // generateJsonBtn
            // 
            this.generateJsonBtn.Location = new System.Drawing.Point(17, 513);
            this.generateJsonBtn.Name = "generateJsonBtn";
            this.generateJsonBtn.Size = new System.Drawing.Size(313, 24);
            this.generateJsonBtn.TabIndex = 17;
            this.generateJsonBtn.Text = "Generate JSON";
            this.generateJsonBtn.UseVisualStyleBackColor = true;
            this.generateJsonBtn.Click += new System.EventHandler(this.generateJsonBtn_Click);
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label7.Location = new System.Drawing.Point(12, 433);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(162, 25);
            this.label7.TabIndex = 18;
            this.label7.Text = "Step 3: Save File";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(434, 549);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.generateJsonBtn);
            this.Controls.Add(this.generateJSBtn);
            this.Controls.Add(this.radioButton2);
            this.Controls.Add(this.productionRadioButton);
            this.Controls.Add(this.codeToRemoveTextBox);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.listNotesTextBox);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.listNameTextBox);
            this.Controls.Add(this.codeWizardBtn);
            this.Controls.Add(this.removeDocsByCodeCheckbox);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.inputFileStatusLabel);
            this.Controls.Add(this.inputFileBtn);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "JCEDataConverter";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button inputFileBtn;
        private System.Windows.Forms.Label inputFileStatusLabel;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.CheckBox removeDocsByCodeCheckbox;
        private System.Windows.Forms.Button codeWizardBtn;
        private System.Windows.Forms.TextBox listNameTextBox;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.TextBox listNotesTextBox;
        private System.Windows.Forms.TextBox codeToRemoveTextBox;
        private System.Windows.Forms.RadioButton productionRadioButton;
        private System.Windows.Forms.RadioButton radioButton2;
        private System.Windows.Forms.Button generateJSBtn;
        private System.Windows.Forms.Button generateJsonBtn;
        private System.Windows.Forms.Label label7;
    }
}

